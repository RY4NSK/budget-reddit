import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Provider as BumbagProvider, Card } from 'bumbag';

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '25% 50% 100px auto' }}>
      <div style={{ display: 'flex', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', color: '808080'}}>
          test
      </div>

      <div style={{ display: 'flex', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4' }}>
        <BumbagProvider>
          <Card variant="bordered">Hello world</Card>
        </BumbagProvider>
      </div>
    </div>
  )
}

export default App;
