import Error from "../Elements/Common/Error";

function ListEssay({ essays }) {
  if (!essays || !essays.pageProps || !essays.pageProps.data || essays.pageProps.data.length === 0) {
    return <Error message="No essays found." />;
  }

  return (
    <>
      {essays.pageProps.data.map((item) => (
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
                  href={`/text/${item._id}-${item.slug}`}
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
      ))}
    </>
  );
}

export default ListEssay;