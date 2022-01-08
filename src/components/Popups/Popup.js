import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { styled } from "@mui/system";
import { Transition, CSSTransition } from "react-transition-group";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
//import { Container, Row, Col } from "react-bootstrap";
import Html from "../Html";
import { useLockBodyScroll, getStyleObjectFromString } from "../Utils";
import LinkGA from "../GoogleAnalytics/LinkGA";
import DB from "./DB";
import LockBodyScrollProxy from "./LockBodyScrollProxy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Scrollbars } from 'react-custom-scrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { isWindows } from 'react-device-detect';
//import { gaEvents } from "components/SpGA/gaEvents";

const Popup = (props) => {
  //useLockBodyScroll();
  /* proxy needed because of some react-transition-group component mounting peculiarity */
  const [curPopup, setCurPopup] = useState(DB[0]);
  const [enterDone, setEnterDone] = useState(false);
  useEffect(() => {
    console.log("props.curPopupNum", props.curPopupNum);
    setCurPopup(DB[props.curPopupNum]);
    console.log("db[0]", DB[0]);
  }, [props.curPopupNum]);

  const duration = 500;

  const Popup_box = styled("div")({

    "&.popup_animation-enter": {
      opacity: 0
    },
    "&.popup_animation-enter-active": {
      opacity: 1,
      transition: "transform 500ms"
    },
    "&.popup_animation-exit": {
      opacity: 1
    },
    "&.popup_animation-exit-active ": {
      opacity: 0,
      transition: "opacity 500ms"
    },
    "&.popup_animation-enter .popup": {
      transform: "translateZ(100px) rotateY(90deg) translateX(90px) scale(0.2)"
    },
    "&.popup_animation-enter-active .popup": {
      opacity: 1,
      transform: "translateZ(0px) rotateY(0deg) translateX(0px) scale(1)",
      transition: "transform 300ms"
    },
    "&.popup_animation-exit-active .popup": {
      transition: "transform 300ms",
      transform:
        "rotateX(-75deg) translateY(100px) translateZ(300px) scale(0.3)"
    }
  });
  
  const PopupBg = styled("div")({
    "&.popup_animation-exit": {
      opacity: 1
    },
    
  });

  const PopupPerspective = styled("div")({
    perspective: "500px",
    zIndex: 7
  });

  const Popup = styled("div")({
    /*position: "relative",
    zIndex: 10,
    background: "#fff",
    borderRadius: "0px",
    color: "#000",
    maxWidth: "500px",
    minWidth: "480px",
    //minHeight: "300px",
    maxHeight: "100vh",//"calc(100vh - 50px)",
    margin: "15px 15px 15px 0",
    //height: "100vh"
    "@media(max-width:767px)":{
      maxWidth: "300px",
      minWidth: "300px",
      overflow:'hidden'
    }*/
  }); 
  
  //const ScrollDiv = styled("div")({
    /*position: "relative",
    minHeight: "300px",
    maxHeight: "calc(100vh - 100px)", //тут еще можно поправить 100px чтоб маргина не было внизу, 100 - это предполагаемая высота хедера
    height:"100%",
    overflow: "scroll"*/
  //});
  
  //.  <OverlayScrollbarsComponent>
  
  return (
    <CSSTransition
      in={props.popupIsOpen}
      classNames="popup_animation"
      timeout={{
        appear: duration,
        enter: duration,
        exit: duration
      }}
      mountOnEnter
      unmountOnExit
      onEntered={() => setEnterDone(true)}
      onExited={() => setEnterDone(false)}
    >
      {(state) => (
        <div className="popup_box">
          {/*state === "entered" && <LockBodyScrollProxy />*/}
          {/* proxy needed because of some react-transition-group component mounting peculiarity */}
          <div className="popup-bg" onClick={props.closePopup}></div>
          <div className="popup_perspective">
            <div className="popup">
              <div onClick={props.closePopup} className="ico_close"></div>
              <div className="popup-wrap">
              
                
                {!props.customContent &&
                <>
                <div className="date_info">
                  <div className="date_num">{curPopup?.date}</div>
                  <div className="date_hint">{curPopup?.hint}</div>
                </div>
                
                <ScrollLock key={props.curPopupNum}>
                <div className={`scroll_div ${isWindows ? "windows" : "nowindows"}`} >
                  {curPopup?.reactcontent}
                  </div>
                  </ScrollLock>

                {/*<SimpleBar style={{ maxHeight: "calc(100vh - 100px)" }}>
                  {state === "entered" && curPopup?.reactcontent}
                </SimpleBar>*/}
                
                
                
                
                <div onClick={props.prevPopup} className="ico_popnav ico_prev"></div>
                <div onClick={props.nextPopup} className="ico_popnav ico_next"></div>
                </>
                }
                
                
                {props.customContent && 
                
                <div className="scroll_div">{props.customContent}</div>
                
                }
                

                
                
                
              </div>
            </div>
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

export default Popup;

