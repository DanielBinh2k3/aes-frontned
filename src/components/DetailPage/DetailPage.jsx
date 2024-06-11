import { Col, Container, Row } from "react-bootstrap"
import "./style.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEssayDetails } from "../../ApiRequests/actions/essayActions";
import Loading from "../Elements/Common/Loading";
import Error from "../Elements/Common/Error";
function DetailPage() {
  const dispatch = useDispatch();
  const { idSlug } = useParams();

  // Split the combined parameter to extract _id and slug
  const [_id, ...slugParts] = idSlug.split('-');
  const slug = slugParts.join('-');

  console.log(idSlug);
  // Fetch essays on component mount and when _id or slug changes
  useEffect(() => {
    if (_id && slug && idSlug) {
      dispatch(getEssayDetails(_id + "-" + slug));
    }
  }, [dispatch, _id, slug, idSlug]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essayDetailGet);
  const { loading, error, essay } = essayList;


//   console.log(essayList);
//   const text = `A growing number of individuals today consider that Olympic games events are exciting and can bridge the gap between numerous countries, while others argue that these events are a waste of money and it could be well-spent on more important things.<br /><br />It is vital to understand that the Olympic games are one of the most popular and essential all around the world. It organizes various sports competitions to improve human sport and competitiveness. This event also provides many beautiful cultures, societies and famous landscapes in different countries because it always chooses different nations to participate in. This results in an exchange of culture from other regions and contributes a significant economic development.<br /><br />On the other hand, individuals hold the view that it should be an expense on other things. In these days and ages, there are many problems that the government have to deal with as environmental pollution, and the economic recession. The polluted environment has had many detrimental effects on people's lives that have led to serious problems in society and the economy, therefore government should invest more in growing trees and cutting out the number of pollutants. The recession of the economy has resulted in the unemployee community and the city council should be funded in public services that can improve job opportunities for people.<br /><br />Despite the fact that organising the Olympic games is a waste of money, I hold the belief that this event is necessary and should be organized. It brings the multicultures to participants or the viewers, either. The cultures can be spread widely among citizens, people also gain more knowledge about the unique cultural and social from unknown countries.<br /><br />In conclusion, the Olympic games and other sectors play an important role in our lives, but this competition should be funded and taken part in to keep the cultural identity through many centuries.`;
  return (
   <>   
   {loading ? (
         <Loading/>
   ) : error ? (
   <Error err_msg={error.message}/>
   ) : essay && essay.pageProps && essay.pageProps.text && essay.pageProps.results? 
(   <Container>
      <div className="jsx-3307320108 page-text__inner">
         <div className="jsx-3307320108 page-text__backlinks">
            <div className="jsx-1447009358 root">
               <div className="jsx-1447009358"><a className="jsx-721911361 link link_theme_gray" href="/">IELTS Writing Correction Service</a> / </div>
               <div className="jsx-1447009358"><a className="jsx-721911361 link link_theme_gray" href="/ielts-writing-samples">Writing Samples</a> / </div>
               <div className="jsx-1447009358"><a className="jsx-721911361 link link_theme_gray" href="/band/7/0">Band 7</a></div>
            </div>
         </div>
         <Row>
            <Col xs={12} md={8}>
            <article className="jsx-3307320108 page-text__essay">
               <div className="jsx-3307320108 page-text__question">
                  <h1 className="jsx-3594441866 h4 ">{essay.pageProps.text.question}</h1>
               </div>
               <div className="jsx-3307320108 page-text__topics"><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-task-2-topics/topic/people"><span className="jsx-3307320108 page-text__topic">#people</span> </a><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-task-2-topics/topic/communication"><span className="jsx-3307320108 page-text__topic">#communication</span> </a><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-task-2-topics/topic/technology"><span className="jsx-3307320108 page-text__topic">#technology</span> </a><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-task-2-topics/topic/effect"><span className="jsx-3307320108 page-text__topic">#effect</span> </a><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-task-2-topics/topic/relaionships"><span className="jsx-3307320108 page-text__topic">#relaionships</span> </a></div>
               <div className="jsx-3307320108 page-text__text" style={{ whiteSpace: "pre-wrap" }} 
               dangerouslySetInnerHTML={{ __html: essay.pageProps.text.text }} />

               <div className="jsx-3307320108 page-text__gpt">
                  <div style={{marginBottom: '20px'}}>
                     <div className="advice-item">
                        <div className="jsx-2246174887 advice-item__type">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f3cc04" width="20" height="20">
                              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <div className="jsx-2246174887">
                           <div className="jsx-2246174887 advice-item__title">
                              <div className="jsx-2246174887">task achievement</div>
                           </div>
                           <div className="jsx-2246174887 advice-item__text">Your essay provides a comprehensive response to the topic and includes relevant real-world examples, which is excellent. However, to improve further, ensure that your conclusion fully encapsulates your main points more explicitly. Consider summarizing your main arguments more clearly to strengthen your conclusion.</div>
                        </div>
                     </div>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                     <div className="jsx-2246174887 advice-item">
                        <div className="jsx-2246174887 advice-item__type">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f3cc04" width="20" height="20">
                              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <div className="jsx-2246174887">
                           <div className="jsx-2246174887 advice-item__title">
                              <div className="jsx-2246174887">coherence cohesion</div>
                           </div>
                           <div className="jsx-2246174887 advice-item__text">In terms of structure, your essay is well-organized with effective transitions between ideas. However, the introduction could be strengthened by providing a clearer thesis statement that outlines your main arguments. This will help to guide the reader through your essay.</div>
                        </div>
                     </div>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                     <div className="jsx-2456982505 advice-item">
                        <div className="jsx-2456982505 advice-item__type">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#14c39a" width="20" height="20">
                              <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <div className="jsx-2456982505">
                           <div className="jsx-2456982505 advice-item__title">
                              <div className="jsx-2456982505">task achievement</div>
                           </div>
                           <div className="jsx-2456982505 advice-item__text">Your examples, particularly those related to social media use during the COVID-19 pandemic and the interaction of introverted students in Japan, are very relevant and effectively support your points.</div>
                        </div>
                     </div>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                     <div className="jsx-2456982505 advice-item">
                        <div className="jsx-2456982505 advice-item__type">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#14c39a" width="20" height="20">
                              <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <div className="jsx-2456982505">
                           <div className="jsx-2456982505 advice-item__title">
                              <div className="jsx-2456982505">coherence cohesion</div>
                           </div>
                           <div className="jsx-2456982505 advice-item__text">You have used appropriate transitions and linking words that help in maintaining a smooth flow of ideas.</div>
                        </div>
                     </div>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                     <div className="jsx-2456982505 advice-item">
                        <div className="jsx-2456982505 advice-item__type">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#14c39a" width="20" height="20">
                              <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <div className="jsx-2456982505">
                           <div className="jsx-2456982505 advice-item__title">
                              <div className="jsx-2456982505">coherence cohesion</div>
                           </div>
                           <div className="jsx-2456982505 advice-item__text">Your main points are supported with specific details, which strengthens your argument.</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="jsx-3307320108 page-text__advice">
                  <div className="jsx-2907985550 advice">
                     <div className="jsx-1214815651 advice-item">
                        <div className="jsx-1214815651 advice-item__icon">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30" className="jsx-1214815651">
                              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" className="jsx-1214815651"></path>
                           </svg>
                        </div>
                        <h3 className="jsx-1214815651 advice-item__title">Include an introduction and conclusion</h3>
                        <div className="jsx-1214815651 advice-item__description">
                           <p>A conclusion is essential for IELTS writing task 2. It is more important than most people realise. You will be penalised for missing a conclusion in your IELTS essay.</p>
                           <p>The easiest paragraph to write in an essay is the conclusion paragraph. This is because the paragraph mostly contains information that has already been presented in the essay – it is just the repetition of some information written in the introduction paragraph and supporting paragraphs. </p>
                           <p>The conclusion paragraph only has 3 sentences:</p>
                           <p>
                           <ul>
                              <li style={{color: 'green'}}>Summary</li>
                              <li style={{color: 'blue'}}>Restatement of thesis</li>
                              <li style={{color: 'crimson'}}>Prediction or recommendation</li>
                           </ul>
                           </p>
                           <p>Example:</p>
                           <p><span style={{color: 'green'}}>To summarize, a robotic teacher does not have the necessary disciple to properly give instructions to students and actually works to retard the ability of a student to comprehend new lessons. </span> <span style={{color: 'blue'}}>Therefore, it is clear that the idea of running a classroom completely by a machine cannot be supported.</span> <span style={{color: 'crimson'}}>After thorough analysis on this subject, it is predicted that the adverse effects of the debate over technology-driven teaching will always be greater than the positive effects, and because of this, classroom teachers will never be substituted for technology.</span></p>
                           <p>Start your conclusion with a linking phrase. Here are some examples:</p>
                        </div>
                        <ul className="jsx-1214815651 advice-item__vocabulary">
                           <li className="jsx-1214815651 advice-item__vocabulary-item">In conclusion</li>
                           <li className="jsx-1214815651 advice-item__vocabulary-item">To conclude</li>
                           <li className="jsx-1214815651 advice-item__vocabulary-item">To summarize</li>
                           <li className="jsx-1214815651 advice-item__vocabulary-item">Finally</li>
                           <li className="jsx-1214815651 advice-item__vocabulary-item">In a nutshell</li>
                           <li className="jsx-1214815651 advice-item__vocabulary-item">In general</li>
                        </ul>
                        <div className="jsx-1214815651 advice-items__button">
                           <p className="jsx-1214815651">Discover more tips in <a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/book">The Ultimate Guide to Get a Target Band Score of 7+ »</a>— a book that is free for <a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/#pricing">🚀 Premium users.</a></p>
                        </div>
                     </div>
                     <div className="jsx-2907985550 advice__nav advice__nav_right">
                        <button className="jsx-1109448655 button button_size_default button_theme_white  with-radius" style={{ height: '55px', boxShadow: 'none', background: 'transparent' }}>
                           <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">→</span></div>
                        </button>
                     </div>
                  </div>
               </div>
            </article>
            </Col>
           <Col xs={6} md={4}>
            <aside className="jsx-3307320108 page-text__analyzer">
               <div className="jsx-2243390142 root" style={{backgroundColor: 'rgb(255, 214, 0)'}}>
                  <div className="jsx-2243390142 inner">
                     <div className="jsx-2243390142 title">Do you want to check your IELTS essays?</div>
                     <div className="jsx-2243390142 description">Submit unlimited essays, letters and charts. Sign up right now and start improving your writing skills.</div>
                     <div className="jsx-2243390142 cta">
                        <a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/check-essay">
                           <button className="jsx-1109448655 button button_size_default button_theme_black  with-radius" style={{ width: '100%', color: 'rgb(255, 214, 0)' }}>
                              <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Check my essay »</span></div>
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="jsx-2993038294 highlight-legends">
                  <div className="jsx-2993038294 highlight-legends__item highlight-legends__item_linkingwords">
                     <span className="jsx-2993038294 highlight-legends__item-counter">{essay.pageProps.results.stats.linkingWords.length}</span>
                     <div className="jsx-2993038294">
                        <div className="jsx-2993038294 highlight-legends__item-name">Linking words</div>
                        <div className="jsx-2993038294 highlight-legends__item-dscr">meeting the goal of 7 or more</div>
                     </div>
                  </div>
                  <div className="jsx-2993038294 highlight-legends__item highlight-legends__item_repeatedwords">
                     <span className="jsx-2993038294 highlight-legends__item-counter">{essay.pageProps.results.stats.repetitiveNouns.length}</span>
                     <div className="jsx-2993038294">
                        <div className="jsx-2993038294 highlight-legends__item-name">Word repetition</div>
                        <div className="jsx-2993038294 highlight-legends__item-dscr">meeting the goal of 3 or fewer</div>
                     </div>
                  </div>
                  <div className="jsx-2993038294 highlight-legends__item highlight-legends__item_mistake">
                     <span className="jsx-2993038294 highlight-legends__item-counter">{essay.pageProps.results.sections.errors.length}</span>
                     <div className="jsx-2993038294">
                        <div className="jsx-2993038294 highlight-legends__item-name">Grammar mistakes</div>
                        <div className="jsx-2993038294 highlight-legends__item-dscr"> </div>
                     </div>
                  </div>
               </div>
               <div className="jsx-2802957637 page-draft-text-analyzer page-draft-text-analyzer_active">
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container page-draft-text-analyzer__stats">
                     <div className="jsx-2802957637"><span className="jsx-2802957637">{essay.pageProps.results.stats.sentences}</span> paragraphs</div>
                     <div className="jsx-2802957637"><span className="jsx-2802957637">{essay.pageProps.results.stats.wordsCount}</span> words</div>
                  </div>
                  <Row className="band-score-row justify-content-md-center">
                        Overall Band Score
                  </Row>
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container">
                     {/* <div className="jsx-2802957637 page-draft-text-analyzer__band"> */}
                     <Container className="justify-content-md-center">
                        <Row className="score-row">
                        <Col>
                           <h1 className="essay-band">{essay.pageProps.results.bands.band}</h1>
                        </Col>
                        </Row>
    
                     </Container>
                     {/* </div> */}
                  </div>
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container">
                     <h3 className="jsx-2802957637 page-draft-text-analyzer__section"><span className="jsx-2601907021 caps">Coherence and Cohesion: {essay.pageProps.results.bands.coherenceBand}</span></h3>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">7</div>
                        Logical structure
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_red">6</div>
                        Introduction &amp; conclusion present
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">8</div>
                        Supported main points
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">9</div>
                        Accurate linking words
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_red">5</div>
                        Variety in linking words
                     </div>
                  </div>
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container">
                     <h3 className="jsx-2802957637 page-draft-text-analyzer__section"><span className="jsx-2601907021 caps">Lexical resource: {essay.pageProps.results.bands.lexicalBand}</span></h3>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">8</div>
                        Varied vocabulary
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">8</div>
                        Accurate spelling &amp; word formation
                     </div>
                  </div>
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container">
                     <h3 className="jsx-2802957637 page-draft-text-analyzer__section"><span className="jsx-2601907021 caps">Grammatical Range: {essay.pageProps.results.bands.grammaticBand}</span></h3>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">9</div>
                        Mix of complex &amp; simple sentences
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">8</div>
                        Clear and correct grammar
                     </div>
                  </div>
                  <div className="jsx-2802957637 page-draft-text-analyzer__section-container">
                     <h3 className="jsx-2802957637 page-draft-text-analyzer__section"><span className="jsx-2601907021 caps">Task Achievement: {essay.pageProps.results.bands.taBand}</span></h3>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">7</div>
                        Complete response
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">7</div>
                        Clear &amp; comprehensive ideas
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green">8</div>
                        Relevant &amp; specific examples
                     </div>
                     <div className="jsx-2802957637 page-draft-text-analyzer__row">
                        <div className="jsx-3372755461 circle circle_color_green"></div>
                        Appropriate word count
                     </div>
                  </div>
               </div>

            </aside>
            </Col>
         </Row>
      </div>
   </Container>) : (<div>No essay</div>)
}
   </>
  )
}

export default DetailPage
