import React from 'react'
import "./pricing.css"

function PricingPage() {
  return (
    <>
      <div className="demo justify-content-center" style={{ height: '60vh', margin :"5rem 0 5rem 0"}}>
          <div className="row ">
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <i className="fa fa-adjust"></i>
                  <div className="price-value"> FREE <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Starter</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>Check essay</b>: 60</li>
                    <li><b>Deep Score</b>: 2</li>
                    <li><b>All Samples</b>: Access</li>
                    <li><b>AI Support</b>: Free</li>
                    <li><b>Facebook Support</b>: Low</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/check-essay">Start now</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <i className="fa fa-briefcase"></i>
                  <div className="price-value"> ₫99.000 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Standard</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>Check essay</b>: 100</li>
                    <li><b>Deep Score</b>: 100</li>
                    <li><b>All Samples</b>: Access</li>
                    <li><b>AI Support</b>: Free</li>
                    <li><b>Facebook Support</b>: Medium</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/payment">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <i className="fa fa-diamond"></i>
                  <div className="price-value">₫149.000 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Premium</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>Check essay</b>: Unlimited</li>
                    <li><b>Deep Score</b>: 200</li>
                    <li><b>All Samples</b>: Access</li>
                    <li><b>AI Support</b>: Free</li>
                    <li><b>Facebook Support</b>: High</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/payment">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="pricingTable red">
                <div className="pricingTable-header">
                  <i className="fa fa-cube"></i>
                  <div className="price-value"> ₫249.00<span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Unlimited</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>Check essay</b>: Unlimited</li>
                    <li><b>Deep Score</b>: Unlimited</li>
                    <li><b>Resource Writing</b>: Fully-Access</li>
                    <li><b>All Samples</b>: Access</li>
                    <li><b>AI Support</b>: Free</li>
                    <li><b>Facebook Support</b>: High</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/payment">sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PricingPage