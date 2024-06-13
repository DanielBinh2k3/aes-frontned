import React from 'react';
import './deepscore.css'

function EssayDeepScoring() {
  return (
    <div className="page-draft">
      <div className="page-draft__editor">
        <div className="root-deep">
          <div className="description">
            <span className="t16">The essay checking service is available exclusively for our 🚀 Subsciribed users.</span>
            <p>If you want to see how the service works, please visit the demo page.</p>
            <div className="cta">
              <div className="cta-item">
                <a className="link link_theme_blue link_decoration_none" href="/payment">
                  <button
                    className="button button_size_small button_theme_white with-radius"
                    style={{ width: '100%' }}
                  >
                    <div className="button__text">
                      <span>Become a Premium User</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="draft-editor">
          <div className="draft-editor__task">
            <div className="draft-editor__question-help">
              <button className="button button_size_mini button_theme_blue with-radius" style={{marginBottom:"1rem"}}>
                <div className="button__text" style={{padding: "1rem 1rem 1rem 1rem"}}>
                  <span>Get a random question</span>
                </div>
              </button>
            </div>
            <div className="h4">
              <div
                contentEditable="true"
                spellCheck="false"
                data-gramm_editor="false"
                placeholder="Enter or paste a question from Task 1 or Task 2"
                className="content-editable "
              ></div>
            </div>
          </div>
          <div className="draft-editor__essay">
            <div className="t18">
              <div
                contentEditable="true"
                spellCheck="false"
                data-gramm_editor="false"
                placeholder="Enter or paste your writing"
                className="content-editable undefined"
              ></div>
            </div>
          </div>
        </div>
        <div id="ideas" style={{ padding: '50px 0px 20px' }}></div>
      </div>
      <div className="page-draft__bands">
        <div className="page-draft__main-buttons">
          <button className="button button_size_default button_theme_green2 with-radius">
            <div className="button__icon">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path>
              </svg>
            </div>
            <div className="button__text">
              <span>Check the essay</span>
            </div>
          </button>
          <button className="button button_size_default button_theme_white with-radius" style={{ marginTop: '10px' }}>
            <div className="button__icon">
              <svg fill="#111" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
              </svg>
            </div>
            <div className="button__text">
              <span>Start Timer</span>
              <span className="button__description">40:00</span>
            </div>
          </button>
        </div>
        <h1 className="page-draft__header"></h1>
        <div className="page-draft-text-analyzer">
          <div className="page-draft-text-analyzer__section-container page-draft-text-analyzer__stats">
            <div>
              <span></span> paragraphs
            </div>
            <div>
              <span></span> words
            </div>
          </div>
          <div className="page-draft-text-analyzer__section-container align-items-center">
            <div className="page-draft-text-analyzer__band">
              <div className="">
                <div className="row justify-content-center align-items-center text-center">
                  <div className="col-auto">
                    <h1 className="h1" style={{ fontWeight: 'bold' }}>0.0</h1>
                  </div>
                </div>

              </div>
              <br/>
              <div className="">
                <div className="row justify-content-center align-items-center">
                  <div className="col-auto">
                    <p className="container__text mb-0">Overall Band Score</p>
                  </div>
                  <div className="col-auto">
                    <span className="caps" style={{ color: '#AAAAAA' }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="page-draft-text-analyzer__section-container">
            <h3 className="page-draft-text-analyzer__section">
              <span className="caps">Coherence and Cohesion: ?</span>
            </h3>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Logical structure
            </div>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Accurate linking words
            </div>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Variety in linking words
            </div>
          </div>
          <div className="page-draft-text-analyzer__section-container">
            <h3 className="page-draft-text-analyzer__section">
              <span className="caps">Lexical resource: ?</span>
            </h3>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Varied vocabulary
            </div>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Accurate spelling & word formation
            </div>
          </div>
          <div className="page-draft-text-analyzer__section-container">
            <h3 className="page-draft-text-analyzer__section">
              <span className="caps">Grammatical Range: ?</span>
            </h3>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Mix of complex & simple sentences
            </div>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Clear and correct grammar
            </div>
          </div>
          <div className="page-draft-text-analyzer__section-container">
            <h3 className="page-draft-text-analyzer__section">
              <span className="caps">Task Achievement: ?</span>
            </h3>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Complete response
            </div>
            <div className="page-draft-text-analyzer__row">
              <div className="circle circle_color_none">?</div>
              Appropriate word count
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EssayDeepScoring;
