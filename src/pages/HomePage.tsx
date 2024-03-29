import { Avatar, Button, Card, Divider, DropdownMenu, Stack, Text } from "bumbag";
import React from "react";
import { Route, Switch as RouteSwitch } from "react-router-dom";
import { CategoryBar } from "../CategoryBar";
import { CategoryPosts } from "../CategoryPosts";
import { CategorySideBarButton } from "../CategorySideBarButton";

export function HomePage() {
  return <>
    <Card marginRight='20px' marginLeft='20px' marginBottom='20px' gridRowStart='3' gridRowEnd='5'>
      <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4', color: '808080', paddingLeft: '20px', paddingTop: '20px' }}>
        <Stack orientation="vertical">
          <CategorySideBarButton color="primary" icon="clock" text="Home" linkTo="/" />
          <CategorySideBarButton color="primary" icon="clock" text="Popular" linkTo="/popular" />
          <CategorySideBarButton color="primary" icon="clock" text="Rising" linkTo="/rising" />
          <CategorySideBarButton color="primary" icon="clock" text="New" linkTo="/new" />
          <CategorySideBarButton color="primary" icon="clock" text="Random" linkTo="/random" />
        </Stack>
      </div>
    </Card>

    <div style={{ display: 'flex', gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '3', padding: '10px', alignItems: 'center', paddingTop: '20px', justifyContent: 'space-between' }}>
      <RouteSwitch>
        <Route path="/popular">
          <CategoryBar title="Popular"></CategoryBar>
        </Route>
        <Route path="/rising">
          <CategoryBar title="Rising"></CategoryBar>
        </Route>
        <Route path="/" exact>
          <CategoryBar title="Home" showSortOptions={true}></CategoryBar>
        </Route>
      </RouteSwitch>
    </div>

    <div style={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '3', gridRowEnd: '5', paddingLeft: '10px', paddingRight: '10px' }}>
      <Card style={{ height: '100%', width: '100%', overflowY: "scroll"}}>
        <RouteSwitch>
          <Route path="/b/">
            <CategoryPosts posts={[
              { turtle: "🐢", title: "10/10 warehouse meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "9/10 warehouse meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "8/10 warehouse meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "7/10 warehouse meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "6/10 warehouse meme", content: { text: "sike no meme here" } }
            ]} />
          </Route>
          <Route path="/popular">
            <CategoryPosts posts={[
              { turtle: "🐢", title: "10/10 better meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "9/10 better meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "8/10 better meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "7/10 better meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "6/10 better meme", content: { text: "sike no meme here" } }
            ]} />
          </Route>
          <Route path="/rising">
            <CategoryPosts posts={[
              { turtle: "🐢", title: "10/10 dumb meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "9/10 dumb meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "8/10 dumb meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "7/10 dumb meme", content: { text: "sike no meme here" } },
              { turtle: "🐢", title: "6/10 dumb meme", content: { text: "sike no meme here" } }
            ]} />
          </Route>
          <Route path="/" exact>
            <CategoryPosts posts={[
              { turtle: "🐢", title: "we're no strangers", content: { text: "to love" } },
              { turtle: "🐢", title: "you know the rules", content: { text: "and so do i" } },
              { turtle: "🐢", title: "a full commitmenst", content: { text: "what i'm thinking of" } },
              { turtle: "🐢", title: "you wouldn't get this", content: { text: "from any other guy" } },
              { turtle: "🐢", title: "iiiiiiiiiiiiiiiiiii", content: { text: "just want to tell you im feeling" } },
              { turtle: "🐢", title: "gotta make you", content: { text: "understand" } },
              { turtle: "🐢", title: "never gonna", content: { text: "give you up" } },
              { turtle: "🐢", title: "never gonna let you down", content: { text: "never gonna run around" } },
              { turtle: "🐢", title: "and desert you", content: { text: "" } }
            ]} />
          </Route>
        </RouteSwitch>
      </Card>
    </div>
    <div style={{ display: 'flex', gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3', justifyContent: 'flex-start', marginLeft: '20px', alignItems: 'center', marginRight: '20px' }}>
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">
              Edit
                </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">
              Share
                </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">
              Rename
                </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
                </DropdownMenu.Item>
          </React.Fragment>
        }
        style={{ width: "100%" }}
      >
        <Button size='small' palette="primary" iconAfter="chevron-down" style={{ width: "100%" }}>SubBluits</Button>
      </DropdownMenu>
    </div>

    <div style={{ gridColumnStart: '3', gridColumnEnd: '4', gridRowStart: '3', gridRowEnd: '4', padding: '10px' }}>
      <Card backgroundColor='primary' color='white' style={{ display: 'flex', height: '20%', alignItems: 'center' }}>
        Top Communitites
          </Card>
      <Card style={{ height: '80%' }}>
        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingBottom: '12px' }}>
          <Avatar initials="M" variant="circle" palette="info" size="small" />
          <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>1.</div><Text fontStyle='italic'>b/memes</Text>
        </div>
        <Divider />
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
          <Avatar initials="DS" variant="circle" palette="primary" size="small" />
          <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>2.</div><Text fontStyle='italic'>b/discord</Text>
        </div>
        <Divider />
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
          <Avatar initials="N" variant="circle" palette="gray" size="small" />
          <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>3.</div><Text fontStyle='italic'>b/news</Text>
        </div>
        <Divider />
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
          <Avatar initials="N" variant="circle" palette="gray" size="small" />
          <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>4.</div><Text fontStyle='italic'>b/gaming</Text>
        </div>
        <div style={{ display: 'flex' }}>
          <Button palette="primary" size="small" width='100%'>View All</Button>
        </div>
      </Card>
    </div>
  </>
}