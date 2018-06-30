import React from 'react';
import Canvas from './Canvas.jsx';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

export default class App extends React.Component {
  render() {
    return (
    <div>
      <Canvas />
    </div>
    )
  }
}