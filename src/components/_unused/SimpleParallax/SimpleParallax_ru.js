import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import throttle from 'lodash.throttle';
import VisibilitySensor from 'react-visibility-sensor';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isTablet
} from "react-device-detect";
import { useToggle } from "components/Utils";
//import "./SimpleParallax.css";

//https://dev.to/robbertvancaem/creating-a-parallax-effect-using-react-spring-16km // add spring from here
//https://dev.to/ansonlowzf/how-to-create-react-parallax-effect-with-react-hooks-1fon
//https://github.com/keske/react-parallax-component/blob/master/src/index.js. // add throttle from here

//https://stackoverflow.com/questions/52028025/how-use-scroll-magic-in-react-js

//export default function SimpleParallax() {
const SimpleParallax = () => {
  const [offset, setOffset] = useState(0);
  const [isOn, toggleIsOn] = useToggle();
  const refOuter = useRef();
  const refInner = useRef();
  
  
  const getScrollPosition = () => {
      if (typeof window === 'undefined') {
        return 0
      }
    
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
  }
  
  
  const defaultScrollTop = useMemo(() => getScrollPosition(), [])
  const previousScrollTop = useRef(defaultScrollTop)
  const [currentScrollTop, setCurrentScrollTop] = useState(defaultScrollTop)
  
  useEffect(() => {
      const handleDocumentScroll = () => {
        const scrollTop = getScrollPosition()
        setCurrentScrollTop(scrollTop)
        
        const posY = refOuter.current.getBoundingClientRect().top;
        //setOffset(window.pageYOffset );
        var hdelt = -3500;
        var sdelt = .75;
        var dur = .1;
        if(window.innerWidth < 1200 & window.innerWidth > 766){
          hdelt = -1900;
          sdelt = .6;
          dur = .3;
        }else{
          if(window.innerWidth < 767){
          hdelt = -1800;
          sdelt = .14;
          dur = .3;
        }
        }
        
        gsap.to(refInner.current, {y: -(hdelt + window.pageYOffset - posY)*sdelt, duration: dur, ease: "none"});
    
        //if (scrollTop > previousScrollTop.current && scrollTop > 43) {
        //  setScrollDir('down');
        //}
        //else {
        //  setScrollDir('up');
        //}
        previousScrollTop.current = scrollTop
        //setPreviousScrollTop(scrollTop);
      }
    
      const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 100)
      if(isTablet || isBrowser){
      window.addEventListener('scroll', handleDocumentScrollThrottled)
      }
      
      var onShowImage = new Image();
      onShowImage.src = './assets/img/logo_cannes.gif';
    
      return () => {
        window.removeEventListener('scroll', handleDocumentScrollThrottled)
      }
    }, [])
    
    function onChange (isVisible) {
      console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

  return (
    
    
              <div className="block4" ref={refOuter}>
                <div className="content" >
                  <div className="line1">В&nbsp;мире виртуальных наград мы&nbsp;подумали, что у&nbsp;нас в&nbsp;России есть уникальная возможность провести Каннские Львы 2021&nbsp;офлайн!<br/>И&nbsp;пригласить на&nbsp;них самых крутых креативных директоров, чтобы те&nbsp;забрали свои награды.</div>
                  <div className="logowgif">
                  <VisibilitySensor>
                  {({isVisible}) =>
                    <div>   <img className="img-fluid" src={`./assets/img/${ isVisible?'logo_cannes' : 'logo_cannes_frame1'}.gif`}/></div>
                  }
                  </VisibilitySensor>
                  </div>
                  <div className="smalltxt">Вот официальное письмо:</div>
                  <div className="scrollbox" ref={refInner}>
                    <div className={`letter ${isOn ?  'class_vadima' : ''}`} onClick={toggleIsOn}>
                    
                      <div className="let_head">
                        <div className="left">
                          <img className="img-fluid" src='./assets/img/logo_letter.png'/>
                        </div>
                        <div className="right">
                          <div className="h-xs">
                        
                            <object className="img-fluid " type="image/svg+xml" data="./assets/img/lettertop_ru.svg"></object>
                          </div>
                          <div className="d-xs">
                            <object className="img-fluid " type="image/svg+xml" data="./assets/img/lettertop_mob_ru.svg"></object>
                          </div>
                          {/* From: “Cannes” Hotel<br/>Ulitsa Kobrina, 26, стр. 1, Kansk, Krasnoyarsk Krai, 663600<br/>To: Best creatives 2021 */}
                        </div>
                      </div>
                      <div className="lets1">Дорогие Bruno Bertelli, Matthias Spaetgens, Alexander Schill, David Lubars, Pancho Cassis, Paul Chan, Jorg Riommi, Greg Hahn, Eduardo Marques, Frederic Levron.</div>
                      <div className="lets2">
                        <p>На&nbsp;Каннском прогнозе, где мы&nbsp;все стараемся отгадать обладателей самого большого количества Львов в&nbsp;этом году, Leo Burnett Moscow делает ставку на&nbsp;вас, как лучших креативщиков года. </p>
                        <p>Мы&nbsp;приглашаем вас забрать ваши награды офлайн&nbsp;&mdash; в&nbsp;Канске.</p>
                        <p>Мы готовы и&nbsp;ждем вас!</p>
                      </div>
                      {/* <div className="sign"> Sincerely yours,<br/>Vladimir Tkachev<br/>CEO Leo Burnett Moscow</div> */}
                      <div className="sign"> 
                        <div className="h-xs">
                        
                          <object className="img-fluid " type="image/svg+xml" data="./assets/img/letterbot_ru.svg"></object>
                        </div>
                        <div className="d-xs">
                          <object className="img-fluid " type="image/svg+xml" data="./assets/img/letterbot_mob_ru.svg"></object>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    
                    <a href="mailto:ksenia.sharapova@publicisgroupe.ru?subject=Kansk%20Lions%20Accreditation&body=Hello,%20Leo!%0AI’m%20______%20from%20_____%20agency.%0AI’m%20on%20top%20of%20the%20best%20creative%20and%20I%20want%20to%20get%20my%20Cannes%20Lions%20Award%20offline%20in%20Kansk!%0AGive%20me%20my%20accreditation,%20please)" className="btn_style">Я ПОЕДУ!</a>
                  </div>
                </div>

                <div className="fadeline"></div>
                {/*  */}
                
              </div>
  )
}

export default SimpleParallax

