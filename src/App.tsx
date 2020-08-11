import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Provider as BumbagProvider, Set, Card, Avatar, Divider, Stack, Icon } from 'bumbag';

function App() {
  return (

    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 40% 40% auto', height: '100vh' }}>
      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', color: '808080', paddingLeft: '20px' }}>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            New
          </div>
          <div>
            Popular
          </div>
          <div>
            Rising
          </div>
          <div>
            Hot
          </div>
        </Stack>
      </div>

      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4', padding: '10px' }}>

        <Divider color="000000" />
        <div style={{ paddingTop: '10px' }}>

          <Card variant="bordered">
            <Set orientation="horizontal">
              <Avatar initials="HC" variant="circle" palette="primary" size="small" />
              <div>
                <div>HamishWHC</div>
                <div style={{ fontSize: '12px' }}>Status: Online</div>
              </div>
            </Set>
          </Card>

          <Card variant="bordered">
            <Set orientation="horizontal">
              <Avatar initials="RK" variant="circle" palette="success" size="small" />
              <div>
                <div>Ryan</div>
                <div style={{ fontSize: '12px' }}>Status: Online</div>
              </div>
            </Set>
          </Card>
        </div>
      </div>
     
      <div style={{gridColumnStart: '2', gridColumnEnd: '3',  gridRowStart: '2', gridRowEnd: '4', padding: '10px'}}>
        <Card variant="bordered" style={{height: '100%'}}>
          
        </Card>
      </div>
    </div>

  )
}

export default App;
