import { Button, Set, Heading, DropdownMenu, Switch, Avatar, useColorMode, Icon } from "bumbag";
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

  return <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '1', gridRowEnd: '2', backgroundColor: 'white', height: '100%' }}>
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
    <div style={{ display: "flex", alignItems: "center",gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '2', backgroundColor: 'white', height: '100%' }}>
      <Turquoise className="Turquoise" />
      <Heading use="h3" color="primary">Bluit</Heading>
    </div>
    <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2', display: 'flex', padding: '10px', height: '100%', alignItems: 'center', backgroundColor: 'white', border: '#b1b7c2' }}>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <Button variant="ghost" palette="primary">Marketplace</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <Button variant="ghost" palette="primary" onClick={onClick}>Home</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: "center"}}>
        <Input width='500px' before={<Input.Icon icon="smile" />} placeholder="Search..." />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Button style={{display: 'flex', justifyContent: 'center'}} iconBefore ='bell'/>
      </div>
    </div>
  </>
}