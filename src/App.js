import React, { Component } from "react";
import Card from "./components/card/Card";
import "./App.css";

class App extends Component {
  state = {
    showOutput: false,
    gramsOutput: 0,
    kgsOutput: 0,
    ozOutput: 0
  };

  convertWeight = e => {
    // Calculate
    let lbs = e.target.value;
    let gramsOutput = lbs / 0.0022046;
    let kgsOutput = lbs / 2.2046;
    let ozOutput = lbs * 16;

    this.setState({
      showOutput: true,
      gramsOutput,
      kgsOutput,
      ozOutput
    });
  };

  toggleTheme = () => {
    if (document.getElementsByTagName("body")[0].className.length === 0) {
      document.getElementsByTagName("body")[0].className = "dark";
    } else {
      document.getElementsByTagName("body")[0].className = "";
    }
  };

  render() {
    const { showOutput, gramsOutput, kgsOutput, ozOutput } = this.state;
    return (
      <div className="container-full">
        {/* Toggle Switch */}
        <div className="col-md-1 offset-md-10">
          <label className="switch">
            <input type="checkbox" onChange={this.toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
        {/* End Toggle Switch */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="display-4 text-center mb-3">Weight Converter</h1>
              <form>
                <div className="form-group">
                  <input
                    id="lbsInput"
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Pounds.."
                    onChange={this.convertWeight}
                  />
                </div>
              </form>
              {showOutput ? (
                <div id="output">
                  <Card
                    cardFor="Grams"
                    cssClass="bg-primary"
                    output={gramsOutput}
                  />
                  <Card
                    cardFor="Kilograms"
                    cssClass="bg-success"
                    output={kgsOutput}
                  />
                  <Card
                    cardFor="Ounces"
                    cssClass="bg-danger"
                    output={ozOutput}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
