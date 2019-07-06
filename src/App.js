import React, { Component } from 'react';
import Card from "./Components/Card";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import cards from "./Components/cards.json";


class App extends Component {
  state = {
    cards, score: 0, highestscore: 0
  };


  cardClickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highestscore={this.state.highestscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            cardClickCount={this.cardClickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highestscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

}

export default App;
