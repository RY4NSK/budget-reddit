import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Provider as BumbagProvider, Card } from 'bumbag';

function App() {
  return (

    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 40% 40% auto', height: '100vh' }}>
      <div style={{ display: 'flex', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', color: '808080'}}>
          test
      </div>

      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4' }}>

          <Card variant="bordered">Hello world</Card>
          <Card variant="bordered">Hello world</Card>

      </div>
    </div>

  )
}

export default App;
