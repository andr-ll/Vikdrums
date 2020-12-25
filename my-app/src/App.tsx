import React, { useState } from 'react';
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
import { PartTemplateData } from './Components/Parts/Components/PartTemplate';
import { FullScreen } from './Components/FullScreen/FullScreen';

export default function App() {


  const [currentPart, setCurrentPart] = useState<PartTemplateData>({
    link: "default",
    src: "default",
    name: "default"
  })

  const onPartChange = (part: PartTemplateData) => {
    setCurrentPart(part)
  }




  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/parts">
          <Parts handlers={{onPartChange}}/>
        </Route>
        <Route path="/audio">
          <Audio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/fullscreen">
          <FullScreen
            link={currentPart.link}
            src={currentPart.src}
            name={currentPart.name}
          />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

