import React from 'react';
import axios from 'axios';
import './App.css';
import Quotes from './components/quotes';

const sampleSimpson = {
  quote : "Shut up, brain. I got friends now. I don't need you anymore.",
  character : "Lisa Simpson",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      simpsons: sampleSimpson
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }
  getSimpsons() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsons: data[0],
        });
    });
  }
  render(){
    return (
      <div className="App">
        <button onClick={(e) => this.getSimpsons(e)} type='button'>Change the quote</button>
        <Quotes simpsons={this.state.simpsons}/>
      </div>
    );
  }
}

export default App;
