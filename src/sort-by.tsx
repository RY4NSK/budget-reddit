import { DropdownMenu, Button } from "bumbag";
import React from "react";

export function Sort() {
  return <DropdownMenu style={{ display: 'flex', justifyContent: 'flex-end' }}
    menu={
      <React.Fragment>
        <DropdownMenu.Item color='primary' fontSize='12px'>
          Date
        </DropdownMenu.Item>
        <DropdownMenu.Item color='secondary' fontSize='12px'>
          A-Z
        </DropdownMenu.Item>
        <DropdownMenu.Item color='info' fontSize='12px'>
          Following Blueits
        </DropdownMenu.Item>
        <DropdownMenu.Item color='success' fontSize='12px'>
          Following People
        </DropdownMenu.Item>
      </React.Fragment>
    }
  >
    <Button iconAfter="chevron-down" size='small' palette="primary" variant="ghost">Sort By</Button>
  </DropdownMenu> 
}
