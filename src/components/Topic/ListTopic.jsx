import React from 'react'
import Error from '../Elements/Common/Error';

function ListTopic({essays}) {
  if (!essays || !essays.pageProps || !essays.pageProps.data || essays.pageProps.data.length === 0) {
    return <Error message="No topic found." />;
  }

  return (
      <>
      {essays.pageProps.data.map((item) => (
            <div key={item._id} className="jsx-2609154510 item">
              <div className="jsx-340894045 tag"><a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href={`/ielts-writing-task-2-topics/${item.type}`}><a style={{color: "white"}}>{item.type}</a></a></div>
              <div><span className="jsx-242105113 t18 ">{item.question}</span></div>
              <div>
                  <div className="jsx-1359721975 root">
                      <a className="jsx-721911361 link link_theme_blue   link_decoration_none  " href="/draft?q=5d4e333454fc163f4f359af0">
                          <button className="jsx-1109448655 button button_size_mini button_theme_white  with-radius" style={{width: "100%"}}>
                          <div className="jsx-1109448655 button__icon ">
                              <svg color="black" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                              </svg>
                          </div>
                          <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Write<span className="jsx-1359721975 hide"> on this topic</span></span></div>
                          </button>
                      </a>
                      <a title={`${item.question}`} 
                      className="jsx-721911361 link link_theme_blue   link_decoration_none  " 
                      href="/search/some-people-think-that-holding-olympic-games-has-positive-effects-for-a-host-country-while-others-believe-that-it-has-a-negative-effect-discuss-both-views-and-give-your-own-opinion/0">
                          <button className="jsx-1109448655 button button_size_mini button_theme_white  with-radius" style={{width: "100%"}}>
                          <div className="jsx-1109448655 button__icon ">
                              <svg color="white" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                              </svg>
                          </div>
                          <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">Answers</span></div>
                          </button>
                      </a>
                      <button className="jsx-1109448655 button button_size_mini button_theme_white  with-radius">
                          <div className="jsx-1109448655 button__text"><span className="jsx-1109448655">···</span></div>
                      </button>
                  </div>
              </div>
            </div>
            ))}
        </>
        )
    }
export default ListTopic
