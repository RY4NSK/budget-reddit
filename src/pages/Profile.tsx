import React from "react";
import { Card, Text, Icon, Button } from "bumbag";

export function Profile() {
  return <>
    <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '2', gridRowEnd: '3' }}>
      <Card elevation='1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} backgroundColor='primary' color='white' width='100%' marginLeft='20px' marginRight='20px' marginTop='20px'>
        <Card elevation='2' style={{ display: 'flex', gridColumnStart: '' }}>

        </Card>
      </Card>
    </div>
    <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '2', gridRowEnd: '4' }}>
      <Card width='100%' marginLeft='20px' marginRight='20px' marginBottom='20px' marginTop='20px'>

      </Card>
    </div>
    <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '4', gridRowEnd: '5' }}>
      <Card width='100%' marginLeft='20px' marginRight='20px' marginBottom='20px'>

      </Card>
    </div>
    <div style={{ display: 'flex', gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '3', margin: '20px' }}>
      <Card width='100%' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text marginRight='20px' color='primary' use="strong">Posts</Text>
        <Button variant='ghost' palette="primary">Top</Button>
        <Button variant='ghost' palette="primary">Hot</Button>
        <Button variant='ghost' palette="primary">Rising</Button>
      </Card>
    </div>  
    <div style={{ display: 'flex', gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '3', gridRowEnd: '5', margin: '20px' }}>
      <Card width='100%'>

      </Card>
    </div>

  </>
}