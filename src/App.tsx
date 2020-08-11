import { Avatar, Button, Card, Divider, DropdownMenu, Icon, Input, Set, Stack, Switch, Text, useColorMode } from 'bumbag';
import React from 'react';
import './App.css';

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
    <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 40% 40% auto', height: '100vh' }}>
      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', color: '808080', paddingLeft: '20px', paddingTop: '20px' }}>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            New
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            Popular
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            Rising
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="clock" aria-label="New" />
            <div style={{ width: 10 }} />
            Random
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

      <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '4', padding: '10px' }}>
        <Card variant="bordered" style={{ height: '100%' }}>

        </Card>
      </div>

      <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '4', padding: '10px' }}>
        <Card variant="bordered" style={{ height: '100%' }}>

        </Card>
      </div>

      <div style={{ display: 'flex', gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2', padding: '10px', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <Button variant="ghost" palette="primary">Marketplace</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <Button variant="ghost" palette="primary">Home</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <Input before={<Input.Icon icon="smile" />} placeholder="Search..." />
        </div>
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
