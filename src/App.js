import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    width: 0,
    height: 0
  }

  componentDidMount(){
    this.setState({
      width: window.innerWidth, 
      height: window.innerHeight
    })
  }

  render() {
    const {width, height} = this.state
    return (
      <div>
        <marquee width={`${width}px`} behavior='alternate' scrollamount='12'>
        <marquee height={`${height}px`} direction='up' behavior='alternate' scrollamount='12'>
          <span className='dvd'>DVD</span>
        </marquee>
        </marquee>
      </div>
    );
  }
}

export default App;
