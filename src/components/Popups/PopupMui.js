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
//import { gaEvents } from "components/SpGA/gaEvents";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";

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
  
  
  
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.popupIsOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.popupIsOpen]);

 
  
  return (
    

          
            <Dialog
        open={props.popupIsOpen}
        onClose={props.closePopup}
        //scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        TransitionComponent={Zoom}
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <div onClick={props.closePopup} className="ico_close"></div>
              <div className="popup-wrappp">
              
                
                {!props.customContent &&
                <>
                <div onClick={props.prevPopup} className="ico_popnav ico_prev" style={{marginLeft:"-100px"}}>xxxxx</div>
                
                <div className="date_info">
                  <div className="date_num">{curPopup?.date}</div>
                  <div className="date_hint">{curPopup?.hint}</div>
                </div>
                
                <div className="scroll_div">
                  {curPopup?.reactcontent}
                  </div>

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
            </DialogContentText>
          
        </DialogContent>

      </Dialog>
      


  );
};

export default Popup;

