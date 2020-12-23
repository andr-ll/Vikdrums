import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { MainPage } from './Components/MainPage/MainPage';
import { Video } from './Components/Video/Video';
import { Parts } from './Components/Parts/Parts';
import { Minus } from './Components/Minus/Minus';
import { Plus } from './Components/Plus/Plus';
import { About } from './Components/About/About';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/parts">
          <Parts />
        </Route>
        <Route path="/minus">
          <Minus />
        </Route>
        <Route path="/plus">
          <Plus />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

