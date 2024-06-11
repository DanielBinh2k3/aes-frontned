import { useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EssaysLatestTopic } from '../../ApiRequests/actions/essayActions';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';
import ListTopic from './ListTopic';
import { Helmet } from 'react-helmet-async';

function LatestTopicPage() {
  const dispatch = useDispatch();
  // Fetch essays on component mount and when  changes
  useEffect(() => {
      dispatch(EssaysLatestTopic());
  }, [dispatch, ]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essayLatestTopicGet);
  const { loading, error, essays } = essayList;
  console.log(essayList)

  return (
    <>
    <Helmet>
        <title>Latest Topic in Ielts writing</title>
        <meta name='description' content='Latest topic in ielts writing'/>
        <link rel='canonical' href='/latest-topic'></link>
    </Helmet>
    <Container>
        <div className="jsx-2609154510 inner">
        </div>
        <div className="jsx-2609154510 left">
            <div className="jsx-2609154510 backlinks">
            <div className="jsx-1447009358 root">
                <div className="jsx-1447009358">
                    <a className="jsx-721911361 link link_theme_gray" href="/">
                    IELTS Writing Correction Service
                    </a> /
                </div><div className="jsx-1447009358">
                    <a className="jsx-721911361 link link_theme_gray" href="/ielts-writing-samples">
                    Writing Samples
                    </a> / 
                </div>
            <div className="jsx-1447009358">Latest IELTS Writing Topics</div>
        </div>
        </div>
            <div className="jsx-2609154510 title">
            <h1 className="jsx-1760859754 h2">Latest IELTS Writing Topics</h1>
            </div>

            <div className="jsx-2609154510 description">
            <span className="jsx-242105113 t18">
                <p>The IELTS essays below will give you a better idea of how to turn your essay into a well-structured, complete-length essay.</p>
            </span>
            </div>
        <div className="jsx-2609154510 navigation">
        <div className="jsx-3082095328 root">
          <a title="IELTS Writing Topics" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/latest-topic">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Latest Topics »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 6" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/6/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 6 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 6.5" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/6.5/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 6.5 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 7" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/7/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 7 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 7.5" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/7.5/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 7.5 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 8" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/8/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 8 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 8.5" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/8.5/1" >
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 8.5 »</span></div>
              </button>
          </a>
          <a title="IELTS Writing Samples Band 9" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/band/9/1">
              <button className="jsx-1109448655 button button_size_mini button_theme_green2  with-radius" style={{"backgroundColor": "#9dc5ff"}}>
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Band 9 »</span></div>
              </button>
          </a>
          <a title="General Task 1 Samples" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-writing-samples-task-1">
              <button className="jsx-1109448655 button button_size_mini button_theme_yellow  with-radius">
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">General Task 1 Samples »</span></div>
              </button>
          </a>
          <a title="Academic Task 1 Samples" className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/ielts-academic-writing-samples-task-1">
              <button className="jsx-1109448655 button button_size_mini button_theme_yellow  with-radius">
                <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Academic Task 1 Samples »</span></div>
              </button>
          </a>
        </div>
        </div>
        <div className="jsx-2609154510 list">
          {loading ? (
            <Loading  />
          ) : error ? (
          <Error err_msg={error}/>
          ) : <ListTopic essays={essays}/>}
        </div>
        </div>
        <div className="jsx-2609154510 right">
        <div className="jsx-2609154510 sticky">
            <div className="jsx-1011830980 root">
            <div className="jsx-2243390142 root" style={{backgroundColor: 'white'}}>
                <div className="jsx-2243390142 inner">
                    <div className="jsx-2243390142 title">🚀 Prepare for IELTS writing section today!</div>
                    <div className="jsx-2243390142 description">
                    <ul className="jsx-1011830980">
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Unlimited Task 1 checks</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Get all the feedback you need to keep improving your charts and letters.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Unlimited Task 2 checks</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Practice and perfect your skills with essays.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Personalized suggestions</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Know how to boost your score.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Detailed mistakes analysis</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Get instant feedback. Spot every mistake.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Topic ideas generator</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Get topic-specific ideas to enhance your writing.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Vocabulary helper</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Get the right words for any topic.</div>
                        </li>
                        <li className="jsx-1011830980">
                            <div className="jsx-1011830980 box"></div>
                            <b className="jsx-1011830980">Progress tracking</b>
                            <div className="jsx-1011830980"  style={{ fontSize: '14px', color: 'rgb(119, 119, 119)' }}>Track your writing improvements.</div>
                        </li>
                    </ul>
                    </div>
                    <div className="jsx-2243390142 cta">
                    <a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/">
                        <button className="jsx-1109448655 button button_size_default button_theme_yellow  with-radius" style={{ width: '100%', color: 'rgb(17, 17, 17)' }}>
                            <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Check my essay »</span></div>
                        </button>
                    </a>
                    </div>
                </div>
            </div>
            </div>
            <div className="jsx-2609154510 sticky-banner"></div>
        </div>
        </div>
    </Container>
    </>
  )
}

export default LatestTopicPage
