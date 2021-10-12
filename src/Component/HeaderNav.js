import React, { Component } from "react";
import "./Styles/styles.css";
import Switch from "react-switch";

export class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
  }
  handleChange = () => {
    let { checked } = this.state;
    checked = !checked;
    this.setState({ checked }, () => {
      this.props.btnFun(this.state.checked);
    });
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="https://rocketshipassets.s3.ap-south-1.amazonaws.com/1571992763914_general_logo.png" />
        </div>
        <div className="toggle">
          <label>
            <span>Switch to toggle interval {"    "}</span>
            <Switch
              onChange={() => {
                this.handleChange();
              }}
              checked={this.state.checked}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
