import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import add from "./add.json";
import subtract from "./subtract.json";
import multiply from "./multiply.json";
import divide from "./divide.json";
import "./App.css";

// let correctGuesses = 0;
// let usersHighScore = 0;
// let correctClicked;

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    add,
    subtract,
    multiply,
    divide,
    correctGuesses: 0,
    usersHighScore: 0,
    correctClicked: false
  };


}
  
  // state = {
  //   add,
  //   subtract,
  //   multiply,
  //   divide,
  //   correctGuesses: 0,
  //   usersHighScore: 0,
  //   correctClicked: false
  // };

  testClicked = (clicked, answer) => {
    if (clicked === answer){
      this.setState({correctClicked: true})
    } else if (clicked !== answer){
      this.setState({correctClicked: false})
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <Header>J-BOT Math!</Header>
          <h3 className="cardHeader">
            Correct Guesses: {this.state.correctGuesses}
            <br />
            High Score: {this.state.usersHighScore}
          </h3>
        </div>
        <div className="container">
          <div className="row">
            {this.state.add.map(match => (
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
      </Wrapper>
    );
  }
}

export default App;
