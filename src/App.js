import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({ gifs: responseData.data });
    //   })
    //   .catch((error) => {
    //     console.log('Error fetching and parsing data', error);
    //   });
    axios
      .get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then((response) => {
        this.setState({
          gifs: response.data.data,
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
