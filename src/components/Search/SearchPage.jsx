import { useDispatch, useSelector } from 'react-redux';
// import './style.css'; // Import your CSS file here   
import { Container} from 'react-bootstrap';
import { searchEssays } from '../../ApiRequests/actions/essayActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Elements/Common/Loading';

function SearchPage() {
  const dispatch = useDispatch();
  const { searchText, page} = useParams();
  console.log(searchText, page)
  // Fetch essays on component mount and when bandId or pageNumber changes
  useEffect(() => {
    if (searchText) {
      dispatch(searchEssays(searchText));
    }
  }, [dispatch, searchText, page]);

  // Get the state from the Redux store
  const essayList = useSelector((state) => state.essaySearchGet);
  const { loading, error, essays } = essayList;
  console.log(essayList)

  return (
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
            <div className="jsx-1447009358">IELTS Writing Samples by topic</div>
        </div>
        </div>
            <div className="jsx-2609154510 title">
            <h1 className="jsx-1760859754 h2">IELTS Writing by topic</h1>
            </div>

            <div className="jsx-2609154510 description">
            <span className="jsx-242105113 t18">
                <p>The IELTS essays below will give you a better idea of how to turn your essay into a well-structured, complete-length essay.</p>
            </span>
            </div>

        <div className="jsx-2609154510 list">
          {loading ? (
            <Loading/>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : 
          essays && essays.pageProps && essays.pageProps.data && essays.pageProps.data.length > 0 ? (
  essays.pageProps.data.sort((a, b) => b.band - a.band).map((item) => (
    <>
      <div key={item._id} className="jsx-2609154510 item">
        <div className="jsx-2134295183 root">
          <div className="jsx-2134295183 question-wrap">
            <div className="jsx-2134295183 band">
              <div className="jsx-3243968521 root">
                <div className="jsx-3243968521 band">{item.band}</div>
                <div className="jsx-3243968521 descr">band</div>
              </div>
            </div>
            <div className="jsx-2134295183">
              <a
                className="jsx-721911361 link link_theme_blue root__link link_decoration_none"
                href={`/text/${item.id}-${item.slug}`}
              >
                <h3 className="h4 question">{item.question}</h3>
              </a>
            </div>
          </div>
          <div className="jsx-2134295183 text">
            <span className="jsx-242105113 t18">{item.shortText}</span>
          </div>
        </div>
      </div>
    </>
  ))
          ) : (
            <div>No essays found.</div>
          )}
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
  )
}

export default SearchPage
