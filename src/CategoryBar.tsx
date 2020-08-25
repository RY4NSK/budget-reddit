import React from "react";
import { Sort } from "./sort-by";
import { Button, Text } from "bumbag";

interface CategoryBarProps {
    title: string,
    showSortOptions?: boolean,
    showSubmit?: boolean,
    onSubmit?: () => void,
    onSortChange?: (sort: string) => void
}

export function CategoryBar(props: CategoryBarProps) {
    return <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text use="strong" color='primary' fontSize='20px' paddingRight='10px'>{props.title}</Text>
            {props.showSortOptions ? <Sort></Sort> : null}
        </div>

        <Button palette="secondary"  size='small' onClick={props.onSubmit}>SUBMIT</Button>
    </>;
} 