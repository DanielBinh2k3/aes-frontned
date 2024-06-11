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
                  <div className="price-value"> $?0.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Standard</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>50GB</b> None</li>
                    <li><b>50</b> None</li>
                    <li><b>50GB</b> None</li>
                    <li><b>10</b> None</li>
                    <li><b>15</b> None</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">sign up</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <i className="fa fa-briefcase"></i>
                  <div className="price-value"> $?0.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Business</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>60GB</b> None</li>
                    <li><b>60</b> None</li>
                    <li><b>60GB</b> None</li>
                    <li><b>15</b> None</li>
                    <li><b>20</b> None</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <i className="fa fa-diamond"></i>
                  <div className="price-value"> $?0.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Premium</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>70GB</b> None</li>
                    <li><b>70</b> None</li>
                    <li><b>70GB</b> None</li>
                    <li><b>20</b> None</li>
                    <li><b>25</b> None</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="pricingTable red">
                <div className="pricingTable-header">
                  <i className="fa fa-cube"></i>
                  <div className="price-value"> $?0.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Extra</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>80GB</b> None</li>
                    <li><b>80</b> None</li>
                    <li><b>80GB</b> None</li>
                    <li><b>25</b> None</li>
                    <li><b>30</b> None</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PricingPage