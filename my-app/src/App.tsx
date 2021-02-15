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
import { Audio } from './Components/Audio/Audio';
import { About } from './Components/About/About';

import { FullScreen } from './Components/FullScreen/FullScreen';
// import { LoginPage } from './Components/LoginPage/LoginPage';

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
        <Route path="/audio">
          <Audio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/login" >
          <LoginPage />
        </Route> */}
        <Route path="/fullscreen">
          <FullScreen />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

