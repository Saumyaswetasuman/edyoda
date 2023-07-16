import React from "react";
import "./Home.css";
import book from "./icons/bookIcon.png";
import hour from "./icons/hourIcon.png";
import live from "./icons/liveIcon.png";
import scholarship from "./icons/scholarshipIcon.png";
import addFree from "./icons/AddIcon.png"
import Payment from "./Payment";

function Homee() {
  return (
    <div className="con-div">
      <div className="left-div">
        <p className="para1">
          Access curated courses worth
          <br />
          <s style={{ color: "red" }}>₹18,500</s> at just <span>₹99</span>per year!
        </p>
        <div className="main-lookup">
          <div className="book-div">
            <div>
              <img src={book} alt="" height={59} width={59}></img>
            </div>
            <div>
              <p>
                <span>100+</span>job relevant courses
              </p>
            </div>
          </div>
          <div className="book-div">
            <div>
              <img src={hour} alt="hour" height={59} width={59}></img>
            </div>
            <div>
              <p>
                <span>20,000+</span> Hours of content
              </p>
            </div>
          </div>
          <div className="book-div">
            <div>
              <img src={live} alt="" height={59} width={59} />
            </div>
            <div>
              <p>
                <span>Esclusive </span>webinar access
              </p>
            </div>
          </div>
          <div className="book-div">
            <div>
              <img src={scholarship} alt="" height={59} width={59}></img>
            </div>
            <div>
              <p>
                Scholarship worth <span>₹94,500</span>
              </p>
            </div>
          </div>
          <div className="book-div">
            <div>
              <img src={addFree} alt="" height={59} width={59}></img>
            </div>
            <div>
              <p><span>Ad Free</span> learning experience</p>
            </div>
          </div>
        </div>
      </div>
      <div><Payment /></div>

    </div>
  );
}

export default Homee;
