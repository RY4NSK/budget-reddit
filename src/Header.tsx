import { Button, Card } from "bumbag";
import { Input } from "bumbag";
import React from "react";

export function Header() {
    return <div style={{ display: 'flex', padding: '10px', height: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
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
}