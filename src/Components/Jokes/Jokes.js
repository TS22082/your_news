import React, { PureComponent } from 'react';
import axios from 'axios';

class Jokes extends PureComponent {
  async componentDidMount() {
    let joke = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain'
      }
    });

    console.log(joke.data);
  }
  render() {
    return <div></div>;
  }
}
export default Jokes;
