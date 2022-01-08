//-----basic
import React, {useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
//-----utils
import {useOnScreen, useInterval, useEffectDebugger, useToggle, useFirstRender, getStyleObjectFromString } from "components/Utils";
import LinkGA from 'components/GoogleAnalytics/LinkGA';
import {gaEvents} from 'components/GoogleAnalytics/gaEvents';
import ScrollHashEventDiv from 'components/GoogleAnalytics/ScrollGA';
import YandexShare from "components/YandexShare/YandexShare";
import Svg from 'components/Svg/Svg';
import Html from "components/Html";
//-----page components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Menu from "components/Menu/Menu";
import PopupTriggers from "components/Popups/PopupTriggers";
import Popup from "components/Popups/Popup";
import {TestClickCounter} from "components/TestClickCounter";
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
//import groovyWalkAnimation from "../assets/lottie/groovyWalk.json";

import {ReduxWrapper} from "../redux/ReduxWrapper"
import App from "./App"





function Page(){
  console.log('new');
  const [menuIsOn, toggleMenuIsOn] = useToggle();

    return (
        <div id="site_wrap" className={`page_main ${menuIsOn ? 'menu_show' : '' }` }>
          <h1 className="text-center">Test page</h1>
          <div className="mainbg">
            <TestClickCounter/>
            <App/>
            <img src="./assets/img/mainbg.jpg"  className="img-fluid" />
            <img src="./assets/img/mainbg.jpg"  className="img-fluid" />
          </div>
          
        
        </div>
    )
}

ReactDOM.render(<ReduxWrapper><Page /></ReduxWrapper>, 
      document.getElementById("root"));