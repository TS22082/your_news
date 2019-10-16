import React, { PureComponent } from 'react';
import axios from 'axios';

class Jokes extends PureComponent {
  async componentDidMount() {
    let joke = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });
    console.log(joke.data.joke);
  }

  render() {
    return <div></div>;
  }
}
export default Jokes;
