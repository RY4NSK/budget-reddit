import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Provider as BumbagProvider, Card, Avatar, Divider} from 'bumbag';

function App() {
  return (

    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 40% 40% auto', height: '100vh' }}>
      <div style={{ display: 'flex', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', color: '808080', paddingLeft: '20px'}}>
          <div style={{}}>
            Hot
          </div>
      </div>

      <div style={{gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4', padding: '10px'}}>
        <Divider color="000000"/>
        <div style={{display: 'flex', paddingTop:'10px'}}>
            
          <Card variant="bordered" footer={<Avatar initials="HC" variant="circle" palette="primary" size="small" />}>HamishWHC</Card>
          
        </div>
          <Card variant="bordered">Hello world</Card>

      </div>
    </div>

  )
}

export default App;
