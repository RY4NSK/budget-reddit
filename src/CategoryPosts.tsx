import { Icon, Button, Divider, Text, cssProps } from "bumbag";
import React from "react";
import { PostContent, TextPostContent } from "./types";
import { useHistory } from "react-router-dom";

type Turtle = "🐢"

interface CategoryPostProps {
  turtle: Turtle,
  title: string,
  content: PostContent
}

function CategoryPost(props: CategoryPostProps) {
  return <>
      <div style={{ display: 'flex', alignItems: 'space-around' }} >
      <Text fontStyle='bold' fontSize="20px"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{textDecoration: "none"}}>{props.turtle}</a> {props.title}</Text>
    </div>
    <div style={{ display: 'flex', alignItems: 'space-around', justifyContent: 'space-between', paddingTop: '10px' }}>
      <Text>{(props.content as TextPostContent).text}</Text>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Button variant="ghost" palette="primary" ><Icon icon='edit' /></Button>
        <Button variant="ghost" palette="primary"><Icon icon='bookmark' /></Button>
      </div>
    </div>
  </>
}

interface CategoryPostsProps {
  posts: CategoryPostProps[]
}

export function CategoryPosts(props: CategoryPostsProps) {
  return <div style={{ padding: '10px' }}>
    <div>
      {props.posts.map((post, i, posts) => {
        return <>
          <CategoryPost {...post} />
          {i === posts.length - 1 ? null : <Divider paddingTop='10px' />}
        </>
      })}
    </div>
  </div>
}