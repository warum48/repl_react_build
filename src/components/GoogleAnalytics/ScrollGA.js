import React, { useEffect, useRef } from "react";
import { gaEvents } from "./gaEvents";
import { useInView } from "react-intersection-observer"; //inView variable
import "intersection-observer";

const ScrollGA = (props) => {
  const viewed = useRef(false);
  const rootMargin_ = -300 + (props.addDelta || 0) + "px"; //!!!this delta is bugging in multiobservers
  //console.log('rootMargin_', rootMargin_);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3 // use this treshold if div is high enough
    //rootMargin: rootMargin_, //if not - use delta in px //!!!bugging in multiple observers
  });

  useEffect(() => {
    //console.log('viewed.current ', viewed.current);
    if (viewed.current == false) {
      if (inView) {
        sendEvent();
        viewed.current = true;
      }
    }
  }, [inView]);

  function sendEvent() {
    var event = {
      hitType: "event",
      eventCategory: "SpEvent",
      eventAction: "" + props.id,
      eventLabel: "Scroll"
    };
    gaEvents.sendEvent(event);
    //console.log(event);
  }

  return (
    <div ref={ref} id={props.id}>
      {props.children}
    </div>
  );
};

export default ScrollGA;
