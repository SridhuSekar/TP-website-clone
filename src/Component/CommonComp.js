import React, { Component } from "react";
import CombineComponent from "./CombineComponent";
import HeaderNav from "./HeaderNav";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";
Modal.setAppElement("#root");
const style = {
  content: {
    overflow: "hidden",
  },
};
var timer;

export class CommonComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      enableInterval: true,
    };
    this.intervalHandler = this.intervalHandler.bind(this);
  }
  intervalHandler = (pass) => {
    this.setState({ enableInterval: true });
    console.log(pass);
    pass ? this.intervalSet() : clearInterval(timer);
  };

  intervalSet = () => {
    timer = setInterval(() => {
      this.setState({ modalIsOpen: true });
    }, 5000);
  };
  componentDidMount() {
    this.intervalSet();
  }

  render() {
    return (
      <div>
        <div className="modalClass">
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setState({ modalIsOpen: false })}
            style={style}
          >
            <CancelIcon
              onClick={() => this.setState({ modalIsOpen: false })}
              style={{ float: "right", margin: "-1rem" }}
            ></CancelIcon>
            <img src="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/Home-Easy-Pop-Up.jpg" />
          </Modal>
        </div>
        <HeaderNav btnFun={this.intervalHandler} />
        <CombineComponent />
      </div>
    );
  }
}

export default CommonComp;
