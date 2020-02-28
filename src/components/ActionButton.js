import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

import TextArea from "react-textarea-autosize";
class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  renderAdd = () => {
    const { list } = this.props;
    const bText = list ? "Add New List" : "Add New Card";
    const bOpacity = list ? 1 : 0.5;
    const bTextColor = list ? "white" : "inherit";
    const bBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.ButtonGroup,
          opacity: bOpacity,
          color: bTextColor,
          background: bBackground
        }}
      >
        <Icon> add </Icon> <p> {bText} </p>{" "}
      </div>
    );
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
    return null;
  };

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard(listId, text));
    }
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "list title" : "enter title for this card";

    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />{" "}
        </Card>{" "}
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "blue"
            }}
          >
            {buttonTitle}{" "}
          </Button>{" "}
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer"
            }}
          >
            {" "}
            close{" "}
          </Icon>{" "}
        </div>{" "}
      </div>
    );
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAdd();
  }
}

const styles = {
  ButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 35,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};
export default connect()(ActionButton);
