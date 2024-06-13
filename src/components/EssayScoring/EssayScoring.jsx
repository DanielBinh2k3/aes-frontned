import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import "./style.css";
import {
  createEssayGrammar,
  createEssayScore,
} from "../../ApiRequests/actions/essayActions";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Elements/Common/Error";
import Loading from "../Elements/Common/Loading";
import { Helmet } from "react-helmet-async";
import * as mammoth from 'mammoth';

const EssayScoring = () => {
  const essayTextareaRef = useRef(null);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [essayText, setEssayText] = useState("");
  const {
    listing,
    loading: loadingGrammar,
    error: errorGrammar,
    success: successGrammar,
  } = useSelector((state) => state.essayGrammarCreate);
  const {
    scoreGeneral,
    loading: loadingScore,
    error: errorScore,
    success: successScore,
  } = useSelector((state) => state.essayScoreCreate);
  const initialTime = 40 * 60; // 40 minutes in seconds
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [question, setQuestion] = useState("");
  const [inputWidth, setInputWidth] = useState("100px"); // Initial width

  const questions = [
    "Intelligence is the most important quality to be a leader. Do you agree or disagree?",
    "It is important for people to take risks, both in their professional lives and their personal lives. Do you think the advantages of taking risks outweigh the disadvantages.",
    "Some people feel that the private lives of celebrities should not be openly shared by the media.\nTo what extent do you agree or disagree?",
    "Some believe that in the next 100 years most people will have a better life, while others disagree. What is your opinion?",
    "Governments should spend money on railways rather than roads.\nTo what extent do you agree or disagree with this statement?",
  ];
  const showRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
    console.log(question);
  };

  const handleInputChange = (event) => {
    const newQuestion = event.target.value;
    setQuestion(event.target.value);
    setInputWidth(`${Math.min(800, Math.max(200, newQuestion.length * 10))}px`);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleCheckGrammar = async () => {
    const essayTextValue = essayTextareaRef.current?.value;
    if (essayTextValue) {
      try {
        await Promise.all([
          dispatch(
            createEssayGrammar({ text: essayTextValue, topic: "topic" })
          ),
          dispatch(createEssayScore({ text: essayTextValue, topic: "topic" })),
        ]);
        console.log("Grammar and score checked for essay:", essayTextValue);
        setEssayText(essayTextValue);
      } catch (error) {
        console.error("Error checking grammar or scoring essay:", error);
      }
    } else {
      console.log("Essay textarea is empty");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (successGrammar || successScore) {
      setModalOpen(true); // Open the modal
    }
  }, [successGrammar, successScore]);

  const renderCorrectedText = () => {
    if (!listing || !listing.spellcheck || !listing.spellcheck.corrections) {
      return essayText;
    }

    let correctedEssayText = essayText;
    let offset = 0;

    listing.spellcheck.corrections.forEach((correction) => {
      const correctionText = `<span style="color: red;">${correctedEssayText.substring(
        correction.startIndex + offset,
        correction.endIndex + 1 + offset
      )}</span> <span style="color: green;">(${
        correction.shortDescription
      }, Correction: ${correction.correctionText})</span>`;

      correctedEssayText =
        correctedEssayText.substring(0, correction.startIndex + offset) +
        correctionText +
        correctedEssayText.substring(correction.endIndex + 1 + offset);
      offset +=
        correctionText.length -
        (correction.endIndex + 1 - correction.startIndex);
    });

    return correctedEssayText.replace(/\n/g, "<br />");
  };

  const handleDownload = () => {
    const correctedText = renderCorrectedText(); // This should be HTML formatted text
    const textToDownload = correctedText
      .replace(/<br \/>/g, "\n")
      .replace(/<\/?[^>]+(>|$)/g, ""); // Replace <br /> with newlines and remove HTML tags

    const element = document.createElement("a");
    const file = new Blob([textToDownload], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "essay_analysis.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); // Clean up the DOM
  };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (fileExtension === "txt") {
            const reader = new FileReader();
            reader.onload = (e) => {
            const fileContent = e.target.result;
            essayTextareaRef.current.value = fileContent;
            };
            reader.readAsText(file);
        } else if (fileExtension === "docx") {
            const reader = new FileReader();
            reader.onload = async (e) => {
            const arrayBuffer = e.target.result;
            const { value: text } = await mammoth.extractRawText({ arrayBuffer });
            essayTextareaRef.current.value = text;
            };
            reader.readAsArrayBuffer(file);
        } 
        // else if (fileExtension === "pdf") {
        //     const reader = new FileReader();
        //     reader.onload = async (e) => {
        //     const arrayBuffer = e.target.result;
        //     const pdfDoc = await PDFDocument.load(arrayBuffer);
        //     const pages = pdfDoc.getPages();
        //     console.log(pages)
        //     let text = "";
        //     for (const page of pages) {
        //         const { items } = await page.getTextContent();
        //         text += items.map(item => item.str).join(' ');
        //     }
        //     essayTextareaRef.current.value = text;
        //     };
        //     reader.readAsArrayBuffer(file);
        // }
        }
    };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="/check-essay"></link>
      </Helmet>
      <div>
        <main>
          <Container>
            <div className="left-column">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter or paste question"
                  value={question}
                  onChange={handleInputChange}
                  style={{ width: "100%" }} // Adjust width as needed
                />
                <Button variant="success" onClick={showRandomQuestion}>
                  Random question
                </Button>
              </div>
              <textarea
                ref={essayTextareaRef}
                placeholder="Enter or paste essay"
              ></textarea>
              <div className="upload-container gap-3">
                <input
                  type="file"
                  id="fileInput"
                  accept=".txt,.doc,.docx"
                  hidden
                  onChange={handleFileUpload}
                />
                <Button
                  variant="success"
                  className="upload-button"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Upload File
                </Button>
                <Button
                  className="check-essay-Button"
                  variant="success"
                  onClick={handleCheckGrammar}
                  disabled={loadingGrammar || loadingScore}
                >
                  {loadingGrammar || loadingScore
                    ? "Checking..."
                    : "Check essay"}
                </Button>
                <Button
                  className="upload-button"
                  variant="success"
                  id="timerButton"
                  onClick={startCountdown}
                >
                  Time: {minutes} min {seconds < 10 ? `0${seconds}` : seconds}{" "}
                  sec
                </Button>
              </div>
            </div>

            <div className="right-column criteria-section">
              <h2>COHERENCE</h2>
              <ul>
                <li>Logical structure</li>
                <li>Accurate linking words</li>
                <li>Variety in linking words</li>
              </ul>
              <h2>LEXICAL RESOURCE</h2>
              <ul>
                <li>Varied vocabulary</li>
                <li>Accurate spelling & word formation</li>
              </ul>
              <h2>GRAMMATICAL RANGE</h2>
              <ul>
                <li>Mix of complex & simple sentences</li>
                <li>Clear and correct grammar</li>
              </ul>
            </div>
          </Container>
        </main>
        <Modal show={modalOpen} onHide={handleCloseModal} className="modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>Essay Analysis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Score</h4>
            {loadingScore && <Loading />}
            {successScore && <p>{scoreGeneral && scoreGeneral.score}</p>}
            <h4>Grammar Feedback</h4>
            {loadingGrammar && <Loading />}
            {errorGrammar && (
              <Error err_msg={"Grammar error: " + errorGrammar} />
            )}
            {errorScore && (
              <Error
                err_msg={
                  errorScore === "Network Error"
                    ? "Essay Scoring Maintenance"
                    : errorScore
                }
              />
            )}
            {successGrammar && (
              <>
                {listing &&
                listing.spellcheck &&
                listing.spellcheck.corrections &&
                listing.spellcheck.corrections.length > 0 ? (
                  <div
                    className="correction"
                    dangerouslySetInnerHTML={{ __html: renderCorrectedText() }}
                  />
                ) : (
                  <p>No corrections found.</p>
                )}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleDownload}>
              Download
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EssayScoring;
