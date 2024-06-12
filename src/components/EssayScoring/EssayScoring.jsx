import React, { useRef, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Correct import from React Bootstrap
import './style.css';
import { createEssayGrammar, createEssayScore } from "../../ApiRequests/actions/essayActions";
import { useDispatch, useSelector } from "react-redux";
import Error from '../Elements/Common/Error';
import Loading from '../Elements/Common/Loading';
import { Helmet } from 'react-helmet-async';

const EssayScoring = () => {
    const essayTextareaRef = useRef(null);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const { listing, loading: loadingGrammar, error: errorGrammar, success: successGrammar } = useSelector((state) => state.essayGrammarCreate);
    const { scoreGeneral, loading: loadingScore, error: errorScore, success: successScore } = useSelector((state) => state.essayScoreCreate);
    const initialTime = 40 * 60; // 40 minutes in seconds
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [question, setQuestion] = useState('');
    const [inputWidth, setInputWidth] = useState('100px'); // Initial width


    const questions = [
        "Intelligence is the most important quality to be a leader. Do you agree or disagree?",
        "It is important for people to take risks, both in their professional lives and their personal lives. Do you think the advantages of taking risks outweigh the disadvantages.",
        "Some people feel that the private lives of celebrities should not be openly shared by the media.\nTo what extent do you agree or disagree?",
        "Some believe that in the next 100 years most people will have a better life, while others disagree. What is your opinion?",
        "Governments should spend money on railways rather than roads.\nTo what extent do you agree or disagree with this statement?"
    ];
    const showRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomIndex]);
        console.log(question)
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
                setTime(prevTime => {
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
        const essayText = essayTextareaRef.current?.value;
        if (essayText) {
            try {
                await Promise.all([
                    dispatch(createEssayGrammar({ text: essayText, topic: 'topic' })),
                    dispatch(createEssayScore({ text: essayText, topic: 'topic' }))
                ]);
                console.log("Grammar and score checked for essay:", essayText);
            // Reset the essay textarea
            essayTextareaRef.current.value = '';
            } catch (error) {
                console.error("Error checking grammar or scoring essay:", error);
            }
        } else {
            console.log("Essay textarea is not available");
        }
    };

    useEffect(() => {
        if (successGrammar || successScore) {
            setModalOpen(true); // Open the modal
        }
    }, [successGrammar, successScore]);
    console.log(errorScore)
    return (
        <>
        <Helmet>
            <link rel='canonical' href='/check-essay'></link>
        </Helmet>
        <div>
            <main>
                <div className="container">
                    <div className="left-column">
                          <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Enter or paste question" 
                                value={question}
                                onChange={handleInputChange}
                                style={{ width: inputWidth }}
                            />
                            <Button variant='success' onClick={showRandomQuestion}>Random question</Button>
                        </div>
                        <textarea ref={essayTextareaRef} placeholder="Enter or paste essay"></textarea>
                        <div className="upload-container">
                            <input type="file" id="fileInput" accept=".txt,.doc,.docx" hidden />
                            <label htmlFor="fileInput" className="upload-button">Upload File</label>
                        </div>
                    </div>
                    <div className="right-column">
                        <button className="check-essay-button" onClick={handleCheckGrammar} disabled={loadingGrammar || loadingScore}>
                            {loadingGrammar || loadingScore ? 'Checking...' : 'Check essay'}
                        </button>
                        <button className="timer" id="timerButton" onClick={startCountdown}>
                            Time: {minutes} min {seconds < 10 ? `` : `${seconds} sec`} 
                        </button>                        
                        <div className="criteria-section">
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
                            <h2>TASK ACHIEVEMENT</h2>
                            <ul>
                                <li>Complete response</li>
                                <li>Appropriate word count</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Essay Analysis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Score</h4>
                 {loadingScore && (<Loading/>
                )} 
                {successScore && (
                <>
                    
                    <p>{scoreGeneral && scoreGeneral.score}</p>
                </>   )}
                {loadingGrammar && (<Loading/>
                )}
                {errorGrammar && (<Error err_msg={'Grammar error' + errorGrammar}/>
                )}
                {errorScore && (<Error err_msg={errorScore == `Network Error` ? 'Essay Scoring Maintanance' : errorScore}/>
                )}

                {successGrammar && (
                <>
                {listing && listing.spellcheck && listing.spellcheck.corrections && listing.spellcheck.corrections.length > 0 ? (
                listing.spellcheck.corrections.map((correction) => (
                    <div key={correction.id} className="correction">
                    <h4>{correction.shortDescription}</h4>
                    <p>{correction.longDescription}</p>
                    <p>
                        <strong>Mistake:</strong> {correction.mistakeText}
                    </p>
                    <p>
                        <strong>Correction:</strong> {correction.correctionText}
                    </p>
                    </div>
                ))
                ) : (
                <p>No corrections found.</p>
                )}
                </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
  );
        </div>
        </>
    );
}

export default EssayScoring;
