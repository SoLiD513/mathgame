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

class App extends Component {
  state = {
    game: false,
    math,
    correctGuesses,
    usersHighScore,
    correctClicked: false
  };

  componentDidUpdate() {
    console.log(this.state.correctClicked);
  }

  startClicked() {
    console.log("yay");
    math.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  }
  componentDidMount() {
    this.startClicked();
  }

  startGame = () => {
    this.setState({game: true});

  }

  testClicked = (clicked, answer) => {
    if (clicked === answer) {
      correctGuesses++;
      this.setCorrectClicked(true);
      if (correctGuesses > usersHighScore) {
        usersHighScore = correctGuesses;
        this.setState({ usersHighScore });
      }
    } else if (clicked !== answer) {
      this.setCorrectClicked(false);
    }
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
            High Score: {usersHighScore}
          </h3>
          {!this.state.game ? <StartButton startClick={this.startGame} /> : <div className="container">
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
  }
}

export default App;
