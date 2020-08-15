import { Button, cssProps } from "bumbag";
import React from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";
import { link } from "fs";

interface CategorySideBarButtonProps {
    color: string,
    icon: string | IconDefinition | {
        viewBoxHeight: number;
        viewBoxWidth: number;
        paths: string[];
    } | undefined,
    text: string,
    linkTo: string
}

export function CategorySideBarButton(props: CategorySideBarButtonProps) {
    const history = useHistory()
    const onClick = React.useCallback(() => {
        history.push(props.linkTo)
    }, [props.linkTo])
    return <Button color={props.color} variant='ghost' iconBefore={props.icon} width="100%" style={{justifyContent: 'flex-start'}} onClick={onClick}>{props.text}</Button>
}