import React from 'react';
import axios from 'axios';
import './App.css';
import Quotes from './components/quotes';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      simpsons: null
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }

  componentDidMount(){
    this.getSimpsons();
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
        {this.state.simpsons
          ? <Quotes simpsons={this.state.simpsons}/>
          : <p>Loading a funny quote</p>
        }
      </div>
    );
  }
}

export default App;
