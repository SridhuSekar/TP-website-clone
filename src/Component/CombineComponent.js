import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import "./Styles/styles.css";
import BenifitTitle from "./BenifitTitle";
import CardBenifit from "./CardBenifit";

export class CombineComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
        <BenifitTitle />
        <CardBenifit />
      </div>
    );
  }
}

export default CombineComponent;
