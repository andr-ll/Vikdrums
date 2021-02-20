import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import { Video } from './components/Video/Video';
import { Parts } from './components/Parts/Parts';
import { Audio } from './components/Audio/Audio';
import { About } from './components/About/About';
import { FullScreen } from './components/FullScreen/FullScreen';
// import { LoginPage } from './Components/LoginPage/LoginPage';

import './App.scss';

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
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}
