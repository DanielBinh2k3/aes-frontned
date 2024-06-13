
const Footer = () => {
  return (
    <>
      {/* <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section> */}

  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks: <a href="https://www.facebook.com/AutomatedIELTSScoring" target="_blank">facebook.com/AutomatedIELTSScoring</a></span>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <p className="text-uppercase fw-bold mb-4">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><i className="fas fa-gem me-3"></i>Automated Ielts Scoring
          </p>
          <p>
            An AI scoring system with implementing feedback generation, also deep scoring with opimise method
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <p className="text-uppercase fw-bold mb-4">
            Products
          </p>
          <p>
            <a href="/check-essay" className="text-reset">Check-Essay</a>
          </p>
          <p>
            <a href="/deep-score" className="text-reset">Deep Score</a>
          </p>
          <p>
            <a href="/user-profile" className="text-reset">User Profile</a>
          </p>
          <p>
            <a href="https://www.facebook.com/AutomatedIELTSScoring" className="text-reset">Facebook</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <p className="text-uppercase fw-bold mb-4">
            Useful links
          </p>
          <p>
            <a href="/price" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="/user-profile" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="/" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="/" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <p className="text-uppercase fw-bold mb-4">Contact</p>
          <p><i className="fas fa-home me-3"></i> Ha Noi, HN 1000, VN</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            truonggiabjnh2003@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
     
    </div>
  </section>


  
  {/* <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}
  </footer>

      {/* <div className='legal'>
        <span>© 2024. Designd By LongHP.</span>
      </div> */}
    </>
  )
}

export default Footer
