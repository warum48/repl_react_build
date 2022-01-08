//-----basic
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
//-----utils
import {
  useOnScreen,
  useInterval,
  useEffectDebugger,
  useToggle,
  useFirstRender,
  getStyleObjectFromString,
} from 'components/Utils';
import LinkGA from 'components/GoogleAnalytics/LinkGA';
import { gaEvents } from 'components/GoogleAnalytics/gaEvents';
import ScrollHashEventDiv from 'components/GoogleAnalytics/ScrollGA';
import YandexShare from 'components/YandexShare/YandexShare';
import Svg from 'components/Svg/Svg';
import Html from 'components/Html';
//-----page components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import PopupTriggers from 'components/Popups/PopupTriggers';
import Popup from 'components/Popups/Popup';
import { TestClickCounter } from 'components/TestClickCounter';
//-----style
import './sty.styl';
//import Popup from 'components/Popup';
//-----installed unused
//import Tilt from 'react-parallax-tilt';
//import StickyBox from "react-sticky-box";
//import SpDragScroll from "components/SpDragScroll/SpDragScroll";
//import SimpleParallax from "components/SimpleParallax/SimpleParallax";
//import TimerTo from "components/TimerTo/TimerTo";
//import SpTest from "components/SpTest/SpTest";
//import ScrollAnimation from 'react-animate-on-scroll';
//import Modal from 'react-bootstrap/Modal';
//import gsap from "gsap";
//import {  BrowserView,  MobileView,  isBrowser,  isMobile} from "react-device-detect";
//import ProgressiveImage from "components/ProgressiveImage";
//import "external-svg-loader";
//import { AspectRatio } from "react-aspect-ratio";
//import "react-aspect-ratio/aspect-ratio.css";
//import useDynamicRefs from 'use-dynamic-refs';
//import Lottie from "lottie-react";
//import groovyWalkAnimation from "./groovyWalk.json";

import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';

import { Counter } from '../redux/Counter';
import { Circles } from 'components/Circles';

export default function App() {
  //const lottieRef = React.useRef();
  return (
    <div className="App">
      <Box
        sx={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          width: '100px',
          height: '100px',
        }}
      >
        <Circles />
      </Box>
      <h1>Hello Redux-Toolkit!</h1>
      <Counter />
      <p>
        wwwOneee morningggggggggdfgdf, whennn Gregorr Samsa woke from troubled
        dreams, he found himself transformed in his bed into a horrible vermin.
        He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections. The bedding was hardly able to cover it and seemed ready
        to slide off any momentttttt.
      </p>

      <p>
        His many legs, pitifully thin compared with the size of the rest of him,
        waved about helplessly as he looked. "What's happened to me? " he
        thought. It wasn't a dream. His room, a proper human room although a
        little too small, lay peacefully between its four familiar walls.
      </p>

      <p>
        A collection of textile samples lay spread out on the table - Samsa was
        a travelling salesman - and above it there hung a picture that he had
        recently cut out of an illustrated magazine and housed in a nice, gilded
        frame. It showed a lady fitted out with a fur hat and fur boa who sat
        upright, raising a heavy fur muff that covered the whole of her lower
        arm towards the viewer. Gregor then turned to look out the window at the
        dull weather.
      </p>

      <p>
        Drops of rain could be heard hitting the pane, which made him feel quite
        sad. "How about if I sleep a little bit longer and forget all this
        nonsense", he thought, but that was something he was unable to do
        because he was used to sleeping on his right, and in his present state
        couldn't get into that position. However hard he threw himself onto his
        right, he always rolled back to where he was.
      </p>

      <p>
        He must have tried it a hundred times, shut his eyes so that he wouldn't
        have to look at the floundering legs, and only stopped when he began to
        feel a mild, dull pain there that he had never felt before. "Oh, God",
        he thought, "what a strenuous career it is that I've chosen! Travelling
        day in and day out.
      </p>

      <p>
        Doing business like this takes much more effort than doing your own
        business at home, and on top of that there's the curse of travelling,
        worries about making train connections, bad and irregular food, contact
        with different people all the time so that you can never get to know
        anyone or become friendly with them. It can all go to Hell! " He felt a
        slight itch up on his belly; pushed himself slowly up on his back
        towards the headboard so that he could lift his head better; found where
        the itch was, and saw that it was covered with lots of little white
        spots which he didn't know what to make of; and when he tried to feel
        the place with one of his legs he drew it quickly back because as soon
        as he touched it he was overcome by a cold shudder. He slid back into
        his former position. "Getting up early all the time", he thought, "it
        makes you stupid. You've got
      </p>
    </div>
  );
}
