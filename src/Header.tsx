import { Button, Set, Heading, DropdownMenu, Switch, Avatar, useColorMode, Icon, Divider, Text } from "bumbag";
import { Input } from "bumbag";
import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Turquoise } from './turquoise.svg';
import "./Turquoise.css"

export function Header() {
  const { colorMode, setColorMode } = useColorMode();
  const history = useHistory()
  const onClick = React.useCallback(() => {
    history.push('/')
  }, [])

  console.log(colorMode)
  const headerBackgroundColor = colorMode === 'default' ? 'white' : '#454e5c'

  return <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '1', gridRowEnd: '2', backgroundColor: headerBackgroundColor, height: '100%' }}>
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="You Stuff" color='primary'>
              <DropdownMenu.Item onClick={() => history.push("/u/hamishwhc")}>
                Profile
                </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => history.push("/settings")}>
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
            <Avatar initials="RA" variant="circle" palette="secondary" size="small" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: '17px', color: 'default' }}>Rick</div>
              <div style={{ fontSize: '12px', color: 'default' }}>Karma: 99999999</div>
            </div>
          </Set>
        </Button>
      </DropdownMenu>
    </div>

    <div style={{ display: "flex", alignItems: "center", gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '2', backgroundColor: headerBackgroundColor, height: '100%' }}>
      <Turquoise className="Turquoise" onClick={() => history.push('/')} />
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="You Stuff" color='primary'>
              <DropdownMenu.Item onClick={() => history.push('/b/memes')} >
                <Text use="i" color='secondary'> b/memes </Text>
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => history.push('/b/discord')} >
                <Text use="i" color='secondary'> b/discord </Text>
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => history.push('/b/funny')} >
                <Text use="i" color='secondary'> b/funny </Text>
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => history.push('/b/gaming')} >
                <Text use="i" color='secondary'> b/gaming </Text>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="Turquoise" size='large' variant="ghost" color="primary" fontSize='40px'>Bluit</Button>
      </DropdownMenu>
    </div>

    <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2', display: 'flex', padding: '10px', height: '100%', alignItems: 'center', backgroundColor: headerBackgroundColor, border: '#b1b7c2' }}>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <Button variant="ghost" palette="primary">Marketplace</Button>
      </div>
      <div style={{ width: 10 }} />
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <Button variant="ghost" palette="primary" onClick={onClick}>Home</Button>
      </div>
      <div style={{ width: 10 }} />
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 100 }}>
        <Input width='100%' before={<Input.Icon icon="smile" />} placeholder="Search..." />
      </div>
      <div style={{ width: 10 }} />
      <div style={{ justifyContent: "flex-end" }}>
        <Button variant="ghost" size="default" palette="primary" ><Icon icon='bell' /></Button>
        <Button variant="ghost" size="default" palette="primary" onClick={() => history.push('/saved')} ><Icon icon='bookmark' /></Button>
      </div>
    </div>

    <Divider style={{ gridColumnStart: '1', gridColumnEnd: '4', gridRow: '2' }} />
  </>
}