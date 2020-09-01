import React from "react";
import { Card, Text, Icon, Button, Image } from "bumbag";
import { CategoryPosts } from "../CategoryPosts";

export function Profile() {
  return <>
    <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '2', gridRowEnd: '3' }}>
      <Card elevation='1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} backgroundColor='primary' color='white' width='100%' marginLeft='20px' marginRight='20px' marginTop='20px'>
        HamishWHC
      </Card>
    </div>
    <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '3', gridRowEnd: '4' }}>
      <Card width='100%' marginLeft='20px' marginRight='20px' marginBottom='20px' >

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

      <CategoryPosts posts={[
              { turtle: "🐢", title: "post 1", content: { text: "post 1" } },
              { turtle: "🐢", title: "post 2", content: { text: "post 2" } },
              { turtle: "🐢", title: "post 3", content: { text: "post 3" } },
              { turtle: "🐢", title: "post 4", content: { text: "post 4" } },
              { turtle: "🐢", title: "post 5", content: { text: "post 5" } }
            ]} />

      </Card>
    </div>

  </>
}