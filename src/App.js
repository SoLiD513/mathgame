import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import StartButton from "./components/StartButton";
// import add from "./add.json";
// import subtract from "./subtract.json";
// import multiply from "./multiply.json";
// import divide from "./divide.json";
import math from "./math.json";
import "./App.css";

let correctGuesses = 0;
let usersHighScore = 0;
let totalGuesses = 0;

class App extends Component {
  state = {
    game: false,
    math,
    correctGuesses,
    usersHighScore,
    correctClicked: false,
    disabled: false,
    oldQuestions: []
  };

  componentDidUpdate() {
    console.log("Correct answer was clicked " + this.state.correctClicked)
    console.log("Was this question disabled: " + this.state.disabled)
  };

  componentDidMount() {
    this.startClicked();
  }

  startClicked() {
    console.log("Page was loaded up");
    math.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  }

  startGame = () => {
    this.setState({ game : true });

  }

  testClicked = (clicked, answer) => {
    if (clicked === answer) {
      correctGuesses++;
      totalGuesses++;
      this.setCorrectClicked(true);
      this.setState({ disabled : true })
      if (correctGuesses > usersHighScore) {
        usersHighScore = correctGuesses;
        this.setState({ usersHighScore });
      } 
      // if (this.state.disabled === true) {
// console.log(this.state.disabled._id)
      // }
    } 
    else if (clicked !== answer) {
      totalGuesses++;
      this.setCorrectClicked(false);
      this.setState({ disabled : true })
    }
    // else if (totalGuesses === 20) {
      // this.setState({ disabled : true })
      // alert("nope")
    // }
  };

  setCorrectClicked = bool => {
    this.setState({ correctClicked: bool });
  };

  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <Header>J-BOT Math!</Header>
          <h3 className="cardHeader">
            Correct Guesses: {correctGuesses}
            <br />
            Total Guesses: {totalGuesses}
            <br />
            High Score: {usersHighScore}
          </h3>
          {!this.state.game ? <StartButton startClick={this.startGame} /> : 
          <div className="container">
              <div className="row">
                {this.state.math.map(match => (
                  <Card
                    id={match.id}
                    key={match.id}
                    question={match.question}
                    answers={match.answers}
                    correctAnswer={match.correctAnswer}
                    testClick={this.testClicked}
                  />
                ))}
              </div>
            </div>
           }
        </div>
      </Wrapper>
    );
  };
};

export default App;
