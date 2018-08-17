import React, { Component } from "react";

class Card extends Component {
  render() {
    const { cardFor, cssClass, output } = this.props;
    return (
      <div className={"card " + cssClass + " mb-2"}>
        <div className="card-body">
          <h4>{cardFor}: </h4>
          <div>{output}</div>
        </div>
      </div>
    );
  }
}

export default Card;
