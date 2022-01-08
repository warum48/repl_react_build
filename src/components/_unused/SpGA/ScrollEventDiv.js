import React, { useEffect, useRef, useState } from 'react';
import {gaEvents} from './gaEvents';
import {useOnScreen} from "components/Utils";
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

const ScrollEventDiv = (props) => {
    
    const screen = useRef();
    const onScreen = useOnScreen(screen, "-300px");
    const [doscrollDone, setDoscrollDone] = useState(false);
    const mounted = useRef(false);
    
    
    useEffect(() => {
        if (mounted.current) {
        if(!doscrollDone){
            var event = { hitType: 'event', eventCategory: 'SpEvent', eventAction: '' + props.id, eventLabel: 'Scroll' };
            gaEvents.sendEvent(event);
            setDoscrollDone(true);
        }
        }
            else {
                mounted.current = true;
            }
        
    }, [onScreen])

    /*const viewed = useRef(false);
    
    const rootMargin_ = "-" + (300 + (props.addDelta || 0) ) +"px";
    console.log('rootMargin_', rootMargin_);

    const { ref, inView, entry } = useInView({

      threshold: .3, // use this treshold if div is high enough
      rootMargin: rootMargin_, //if not - use delta in px
    });

    useEffect(() => {
      //console.log('viewed.current ', viewed.current);
      if (viewed.current == false) {
        if (inView) {
          console.log('entry', entry);
          sendEvent();
          viewed.current = true;
        }
        
      }
      
    }, [inView]);*/

    function sendEvent() {
      var event = { hitType: 'event', eventCategory: 'SpEvent', eventAction: '' + props.id, eventLabel: 'Scroll' };
      gaEvents.sendEvent(event);
      //console.log(event);
    }
    
    /*  //------SCROLL EVENTS--------
    const screen1 = useRef();
    const screen2 = useRef();
    const screen3 = useRef();
    
    const onScreen1 = useOnScreen(screen1, "-300px");
    const onScreen2 = useOnScreen(screen2, "-300px");
    const onScreen3 = useOnScreen(screen3, "-300px");
    
    const screensTogAr = [onScreen1, onScreen2, onScreen3];
    const scrollEventNames = ['Darovina lifehacks', 'Darovina aptechka', 'Darovina use'];
    const [doscrollDone, setDoscrollDone] = useState([false, false, false]);
    
    useEffectDebugger(() => {
      //console.log('screensTogAr.indexOf(true)', screensTogAr.indexOf(true));
      //console.log('doscrollDone[screensTogAr.indexOf(true)]', doscrollDone[screensTogAr.indexOf(true)]);
      
      if(screensTogAr.indexOf(true) != -1 && doscrollDone[screensTogAr.indexOf(true)] != true){
      var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: scrollEventNames[screensTogAr.indexOf(true)], eventLabel: 'Scroll'};
        gaEvents.sendEvent(event);
        
        setDoscrollDone(
            doscrollDone.map((ds, index) =>
                index == screensTogAr.indexOf(true)
                    ? true
                    : ds
            )
          )
      }
    }, screensTogAr)*/
    
    return (
            <div ref={screen} id={props.id} className="scrollDiv">{props.children}</div>
        );
};

export default ScrollEventDiv;