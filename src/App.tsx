import { Avatar, Button, Card, Divider, DropdownMenu, Icon, Input, Set, Stack, Switch, Text, useColorMode, fontSize } from 'bumbag';
import React from 'react';
import './App.css';
import { Header } from './Header';
import { Sort } from './sort-by';
import {
  BrowserRouter as Router,
  Switch as RouteSwitch,
  Route,
  Link
} from "react-router-dom";
import { CategoryBar } from './CategoryBar';
import { CategorySideBarButton } from './CategorySideBarButton';
import { CategoryPosts } from './CategoryPosts';

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
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '18% auto 18%', gridTemplateRows: '10% 10% 40% 40% auto', height: '100vh' }}>
        <div style={{ gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '3', gridRowEnd: '4', color: '808080', paddingLeft: '20px', paddingTop: '20px' }}>
          <Stack orientation="vertical">
            <CategorySideBarButton color="primary" icon="clock" text="Home" linkTo="/" />
            <CategorySideBarButton color="primary" icon="clock" text="Popular" linkTo="/popular" />
            <CategorySideBarButton color="primary" icon="clock" text="Rising" linkTo="/rising" />
            <CategorySideBarButton color="primary" icon="clock" text="New" linkTo="/new" />
            <CategorySideBarButton color="primary" icon="clock" text="Random" linkTo="/random" />
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
          <Card variant="bordered" style={{ height: '100%' }}>
            <RouteSwitch>
              <Route path="/b/">
              <CategoryPosts posts={[
                  {turtle: "🐢", title: "10/10 warehouse meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "9/10 warehouse meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "8/10 warehouse meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "7/10 warehouse meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "6/10 warehouse meme", content: {text: "sike no meme here"}}
                ]}/>
              </Route>
              <Route path="/popular">
              <CategoryPosts posts={[
                  {turtle: "🐢", title: "10/10 better meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "9/10 better meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "8/10 better meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "7/10 better meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "6/10 better meme", content: {text: "sike no meme here"}}
                ]}/>
              </Route>
              <Route path="/rising">
              <CategoryPosts posts={[
                  {turtle: "🐢", title: "10/10 dumb meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "9/10 dumb meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "8/10 dumb meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "7/10 dumb meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "6/10 dumb meme", content: {text: "sike no meme here"}}
                ]}/>
              </Route>
              <Route path="/" exact>
                <CategoryPosts posts={[
                  {turtle: "🐢", title: "10/10 solid meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "9/10 solid meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "8/10 solid meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "7/10 solid meme", content: {text: "sike no meme here"}},
                  {turtle: "🐢", title: "6/10 solid meme", content: {text: "sike no meme here"}}
                ]}/>
              </Route>
            </RouteSwitch>
          </Card>
        </div>
        
        <Header />

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
      </div>
    </Router>
  )
}

export default App;
