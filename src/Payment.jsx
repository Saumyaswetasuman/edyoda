import React, { useState } from "react";
import "./Payment.css";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { TbClockExclamation } from "react-icons/tb";
import razorpayicon from "./icons/Razorpay Icon.png";


function Payment() {

  const [total, setTotal] = useState("99")
  const [status, setStatus] = useState(false)

  const clickHandler = (e) => {
    setTotal(e.target.value)
    setStatus(true)
  }
  return (
    <div>
      <div className="payment-div">
        <div className="progress-div">
          <div className="stage1">
            <div>
              <button className="sign-btn">1</button>
            </div>
            <div>
              <p>Sign Up</p>
            </div>
          </div>
          <div className="stage2">
            <div>
              <button className="sign-btn">2</button>
            </div>
            <div>
              <p>Subscribe</p>
            </div>
          </div>
        </div>
        <div className="subscrition-div">
          <p>Select your Subcription plan</p>
        </div>
        <div className="input-container">
          <div className="text-field1">
            <div>
              <span>
                <MdOutlineRadioButtonChecked /> 12 Months Subscrition
              </span>
            </div>
            <div>
              <p>Total ₹99</p>
              <p>₹8 /mo</p>
            </div>
            <div className="exp-div">
              <h6>Offer experied</h6>
            </div>
          </div>
          <div className="text-field2">
            <div onClick={clickHandler}>
              <input type="radio" name="r1" value="179"></input>
              <span> 12 Months Subscrition</span>
            </div>
            <div>
              <p>Total ₹179</p>
              <p>₹17 /mo</p>
            </div>
            <div className="rec-div">
              <h6>Recomended</h6>
            </div>
          </div>
          <div className="text-field3">
            <div onClick={clickHandler}>
              <input type="radio" name="r1" value="149"></input>
              <span> 6 Months Subscrition</span>
            </div>
            <div>
              <p>Total ₹149</p>
              <p>₹25 /mo</p>
            </div>
          </div>
          <div className="text-field4">
            <div onClick={clickHandler}>
              <input type="radio" name="r1" value="33"></input>
              <span> 3 Months Subscrition</span>
            </div>
            <div>
              <p>Total ₹99</p>
              <p>₹33 /mo</p>
            </div>
          </div>
        </div>
        <div className="summery-container">
          <div className="txt-container">
            <div>
              <p>Subscription fee</p>
            </div>
            <div style={{ color: "#3C4852" }}>₹18,500</div>
          </div>
          <div className="alert">
            <div className="alert-header">
              <div>
                <p style={{ fontWeight: "bold" }}>Limited Time Offer </p>
              </div>
              <div style={{ color: "black" }} className="money">
                {
                  status ? (<>-₹{18500 - total}</>) : (<>-₹{`18,401`}</>)
                }

              </div>
            </div>
            <div className="alert-body" style={{ marginLeft: "30px" }}>
              <TbClockExclamation height="24px" width="24px" st />
              <span> Offer valid till 25th March 2023</span>
            </div>
          </div>
          <div className="text-container">
            <div>
              <p>
                <h3 style={{ color: "#3C4852;", display: "inline-block" }}>
                  Total
                </h3>
                (Incl. of 18% GST)
              </p>
            </div>
            <div style={{ color: "#3C4852", fontWeight: "bold" }}>₹{total}</div>
          </div>
        </div>
        <div className="btn-containr">
          <div > <button className="btn-cancel">CANCEL</button></div>
          <div ><button className="btn-proceed">PROCEED TO PAY</button></div>
        </div>
        <div>
          <img src={razorpayicon} alt="" height="40px" width='120px' style={{ marginTop: "13px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Payment;
