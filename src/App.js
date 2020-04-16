import React, {Component} from 'react';
import MagicBall from './components/MagicBall';
import styled from 'styled-components';
import './App.css';

const Backdiv = styled.div`
  background-color: #d4d5cf;
  height: 100%;
  width: 100%;
  display: flex;
`;
class App extends Component {
  render() {
    return (
      <Backdiv className="App">
        <MagicBall />
      </Backdiv>
    );
  }
}

export default App;
