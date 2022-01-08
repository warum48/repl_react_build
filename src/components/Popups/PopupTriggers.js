import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import LinkGA from "../GoogleAnalytics/LinkGA";
import {gaEvents}  from "../GoogleAnalytics/gaEvents";
import Popup from "./Popup";
import DB from "./DB";
import {
  useLockBodyScroll,
  useOnScreen,
  useInterval,
  useEffectDebugger,
  useToggle,
  useFirstRender
} from "../Utils";
import LockBodyScrollProxy from "./LockBodyScrollProxy";
// import Svgimage from '../../assets/img/clicks.svg'

//{curPopupNum != -1 && ( )}

const PopupTriggers = (props) => {
  const [totalPopups, setTotalPopups] = useState(2);
  const [curPopupNum, setCurPopupNum] = useState(-1);
  const [curId, setCurId] = useState('');
  
  const [menuIsOn, toggleMenuIsOn] = useToggle();
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const isFirstRender = useFirstRender();
  const svgref = useRef(null);

  function nextPopup() {
    var event = {
      hitType: "event",
      eventCategory: "SpEvent",
      eventAction: "NextAr_on_"+(curPopupNum+1),
      eventLabel: "Click"
    };
    gaEvents.sendEvent(event);
    
    setCurPopupNum((curPopupNum) => {
      if (curPopupNum < DB.length - 1) {
        curPopupNum += 1;
      } else {
        curPopupNum = 0;
      }
      return curPopupNum;
    });
  }
  function prevPopup() {
    var event = {
      hitType: "event",
      eventCategory: "SpEvent",
      eventAction: "PrevAr_on_"+(curPopupNum+1),
      eventLabel: "Click"
    };
    gaEvents.sendEvent(event);
    
    setCurPopupNum((curPopupNum) => {
      if (curPopupNum > 0) {
        curPopupNum -= 1;
      } else {
        curPopupNum = DB.length - 1;
      }
      return curPopupNum;
    });
  }

  useEffect(() => {
    if (!isFirstRender) {
      if (curPopupNum != -1) {
        setPopupIsOpen(true);
      } else {
        setPopupIsOpen(false);
      }
    }
  }, [curPopupNum]);

  useEffect(() => {
    DB.forEach((item, index) => {
      if (item.id) {
        /*const indexInDB = DB.findIndex(
          (item) => item.click_id === "click_" + index
        );*/
        const indexInDB = index;
        //svgref.current
          //.contentDocument
          //Svgimage
          
        svgref.current  
          //.contentDocument
          //.documentElement
          .getElementById("click_"+item.id)
          .addEventListener("click", () => {
            console.log("clicked", indexInDB);
            setCurPopupNum(indexInDB);
            setCurId(item.id);
            
            var event = {
              hitType: "event",
              eventCategory: "SpEvent",
              eventAction: "SelectPopup_"+(curPopupNum+1)+"("+item.id+")",
              eventLabel: "Click"
            };
            gaEvents.sendEvent(event);
    
          });
      }
    });
  }, []);

  return (
    <>
    
      <div className="calendar">
        <div className="calendar_img">
          <img src="./assets/img/calendar.png" className="img-fluid" />
        </div>
        <div className="calendar_clicks">
          {/*<object className="img-fluid" type="image/svg+xml" data={Svgimage} name="clicks" ref={svgref}></object>*/}
          {/*<object className="img-fluid" type="image/svg+xml" data="./assets/img/clicks.svg" name="clicks" ref={svgref}></object>*/}
          <svg width="467" height="3225" viewBox="0 0 467 3225" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgref} className="img-fluid">
              <g pointerEvents="visiblePainted" cursor="pointer">
              <rect id="click_nov_25" x="26.4341" width="131.203" height="75.8137" fill="#19178D"/>
              <rect id="click_dec_1" x="24.4758" y="645" width="81.26" height="118" fill="#19178D"/>
              <rect id="click_dec_3" x="25.4548" y="826" width="80.2809" height="128" fill="#19178D"/>
              <rect id="click_dec_5" x="328.956" y="1000" width="94.9665" height="123" fill="#19178D"/>
              <rect id="click_dec_6" x="276.088" y="1168" width="68.5325" height="95" fill="#19178D"/>
              <rect id="click_dec_7" x="80.281" y="1227" width="95.9455" height="123" fill="#19178D"/>
              <rect id="click_dec_12" x="232.031" y="1904" width="74.4067" height="94" fill="#19178D"/>
              <rect id="click_dec_17" x="348.537" y="2267" width="64.6164" height="95" fill="#19178D"/>
              <rect id="click_dec_18" x="33.2871" y="2424" width="110.631" height="88" fill="#19178D"/>
              <rect id="click_dec_22" x="32.2871" y="2609" width="110.631" height="89" fill="#19178D"/>
              <rect id="click_dec_23" x="21.5388" y="2824" width="284.899" height="204" fill="#19178D"/>
              <rect id="click_dec_25" x="155.667" y="3094" width="160.562" height="131" fill="#19178D"/>
              <rect id="click_dec_19" x="178.185" y="2499" width="104.757" height="85" fill="#19178D"/>
              <rect id="click_dec_20" x="298" y="2422" width="126" height="88" fill="#19178D"/>
              <rect id="click_dec_21" x="167.415" y="2591" width="293.711" height="218" fill="#19178D"/>
              <rect id="click_dec_13" x="335.809" y="1805" width="121.4" height="130" fill="#19178D"/>
              <rect id="click_dec_15" x="304.48" y="2051" width="137.065" height="134" fill="#19178D"/>
              <rect id="click_dec_14" x="92.0537" y="2012.98" width="136.493" height="104.743" fill="#19178D"/>
              <rect id="click_dec_16" x="19.5808" y="2146" width="276.088" height="226" fill="#19178D"/>
              <rect id="click_dec_8" x="35.2454" y="1413" width="140.981" height="163" fill="#19178D"/>
              <rect id="click_dec_10" x="51.8889" y="1600" width="320.145" height="172" fill="#19178D"/>
              <rect id="click_dec_9" x="191.891" y="1317" width="275.109" height="223" fill="#19178D"/>
              <rect id="click_dec_2" x="146" y="681" width="294" height="232" fill="#19178D"/>
              <rect id="click_nov_27" x="26.4341" y="100" width="138.044" height="123" fill="#19178D"/>
              <rect id="click_nov_30" x="201.681" y="467" width="191.891" height="142" fill="#19178D"/>
              <rect id="click_nov_26" x="200" y="35" width="259" height="228" fill="#19178D"/>
              <ellipse id="click_nov_28" cx="100.841" cy="392.5" rx="100.841" ry="138.5" fill="#19178D"/>
              <ellipse id="click_nov_29" cx="306.317" cy="360.54" rx="87.2923" ry="86.2879" fill="#19178D"/>
              <ellipse id="click_dec_4" cx="163" cy="1082.5" rx="128" ry="114.5" fill="#19178D"/>
              <ellipse id="click_dec_11" cx="130.212" cy="1881" rx="78.3229" ry="83" fill="#19178D"/>
              <ellipse id="click_dec_24" cx="388.677" cy="2971.5" rx="72.4486" ry="74.5" fill="#19178D"/>
              </g>
          </svg>

        </div>
      </div>
      



      {popupIsOpen && false && <LockBodyScrollProxy />}

      <Popup
        popupIsOpen={popupIsOpen}
        curPopupNum={curPopupNum}
        curId={curId}
        //closePopup={() => setPopupIsOpen(false)}
        closePopup={() => setCurPopupNum(-1)}
        nextPopup={nextPopup}
        prevPopup={prevPopup}
      ></Popup>
      
      
    </>
  );
};

export default PopupTriggers;
