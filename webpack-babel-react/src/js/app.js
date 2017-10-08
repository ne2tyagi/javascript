import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/styles.css';

import keenImage from '../assets/keen.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));