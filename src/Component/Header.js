import React, { Component } from "react";
import "./Styles/styles.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <div className="title">
            <h1>
              Stay driven with<span> Motor Easy</span>
            </h1>
          </div>
          <p className="p-align">
            To qualify you must be a Malaysian above 18 years old and have a
            valid driving license. We accept Private Cars up to 15 years old
            with cubic capacity below 2500 and sum insured up to maximum
            RM300,000.
          </p>
          <p className="redPara p-align">
            *Toyota models – Land Cruiser, Harrier, Hilux, Alphard, Vellfire,
            Fortuner; Mitsubishi models – Triton, Storm; and all sports models
            and high performance models are not acceptable.
          </p>
        </div>
        <div>
          <img src="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1597994643974_MotorImage.jpg" />
        </div>
      </div>
    );
  }
}

export default Header;
