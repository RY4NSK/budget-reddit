import { Avatar, Button, Card, Divider, DropdownMenu, Icon, Input, Set, Stack, Switch, Text, useColorMode } from 'bumbag';
import React from 'react';
import './App.css';
import { Header } from './Header';

type ColorOptions = "default" | "dark"

function ColorSwitching() {
  let [colorMode, setColorMode] = React.useState<ColorOptions>("default")

  return (
    <Stack>
      <Text>Current mode: {colorMode}</Text>
      <Set>
        <Button onClick={() => setColorMode('default')}>Light</Button>
        <Button onClick={() => setColorMode('dark')}>Dark</Button>
      </Set>
    </Stack>
  )
}

function App() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 10% 40% 40% auto', height: '100vh' }}>
      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4', color: '808080', paddingLeft: '20px', paddingTop: '20px' }}>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            <Text color='primary'>New</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            <Text color='primary'>Popular</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            <Text color='primary'>Rising</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            <Text color='primary'>New</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            <Text color='primary'>Random</Text>
          </div>
        </Stack>
      </div>

      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '', gridRowEnd: '5', padding: '10px' }}>
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
          <div style={{ paddingTop: '10px' }}>
            <Card variant="bordered" >
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
      </div>

      <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '3', gridRowEnd: '5', padding: '10px' }}>
        <Card variant="bordered" style={{ height: '100%' }}>

        </Card>
      </div>



      <div style={{ display: 'flex', gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '3', padding: '10px', alignItems: 'center', paddingTop: '20px', justifyContent: 'space-between'}}>

          <Text use="strong" color='primary' fontSize='20px'>Popular</Text>

          <Button palette="primary" size='small'>SUBMIT</Button>

      </div>




      <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '3', gridRowEnd: '5', paddingLeft: '10px', paddingRight: '10px'}}>
        <Card variant="bordered" style={{ height: '100%' }}>
          <div style={{ padding: '10px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'space-around' }} >
                <Text fontStyle='bold' fontSize="20px">Title</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'space-around', justifyContent: 'space-between', paddingTop: '10px' }}>
                <Text >Text goes here</Text>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button variant="ghost" palette="primary"><Icon icon='save' /></Button>
                  <Button variant="ghost" palette="primary"><Icon icon='edit' /></Button>
                </div>
              </div>
              <Divider paddingTop='10px' />
            </div>
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: "7px", marginTop: '7px', marginRight: '7px', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '1', gridRowEnd: '2', backgroundColor: 'white', height: '100%'}} />

      <div style={{ marginBottom: "7px", marginTop: '7px', marginLeft: '7px', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '2', backgroundColor: 'white', height: '100%'}} />

      <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2' }}>
          <Header />
      </div>

      <div style={{ gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '3', gridRowEnd: '5', padding: '10px' }}>
        <Card variant="bordered" style={{ display: 'flex', height: '10%', alignItems: 'center' }}>
          Top Communitites
        </Card>
        <Card variant="bordered" style={{ height: '50%' }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingBottom: '12px' }}>
            <Avatar initials="M" variant="circle" palette="info" size="small" />
            <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>1.</div><Text fontStyle='italic'>r/memes</Text>
          </div>
          <Divider />
          <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
            <Avatar initials="DS" variant="circle" palette="primary" size="small" />
            <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>2.</div><Text fontStyle='italic'>r/discord</Text>
          </div>
          <Divider />
          <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
            <Avatar initials="N" variant="circle" palette="gray" size="small" />
            <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>3.</div><Text fontStyle='italic'>r/news</Text>
          </div>
          <div style={{ display: 'flex' }}>
            <Button palette="primary" size="small" width='100%'>View All</Button>
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '1', gridRowEnd: '2', justifyContent: 'center', alignItems: 'center' }}>
        <DropdownMenu
          menu={
            <React.Fragment>
              <DropdownMenu.Group title="You Stuff" color='primary'>
                <DropdownMenu.Item>
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  Settings
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Divider />
              <DropdownMenu.Group title="Customisation" color='secondary'> {/* Shouldn't this be in settings not in a random dropdown? */}
                <DropdownMenu.Item>
                  <Switch
                    label="Dark Mode"
                    checked={colorMode === "dark"}
                    onChange={(e: React.FormEvent<any>) => setColorMode((e.target as any).checked ? "dark" : "default")}
                  />
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Divider />
              <DropdownMenu.Group>
                <DropdownMenu.Item color='danger'>
                  Log Out
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </React.Fragment>
          }
        >
          <Button variant="ghost" size="large" paddingY='10'>
            <Set orientation="horizontal">
              <Avatar initials="RK" variant="circle" palette="secondary" size="small" />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: '17px' }}>Ryan</div>
                <div style={{ fontSize: '12px' }}>Karma: 151</div>
              </div>
            </Set>
          </Button>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default App;
