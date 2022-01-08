import React from "react";
import { gaEvents } from "./gaEvents";

const ClickGA = (props) => {
  function sendEvent() {
    var event = {
      hitType: "event",
      eventCategory: "SpEvent",
      eventAction: props.action,
      eventLabel: "Click"
    };
    gaEvents.sendEvent(event);

    console.log("props.onClickTrans", props.onClickTrans);
    if (props.onClickTrans) {
      props.onClickTrans[0](props.onClickTrans[1]);
    }
  }

  return (
    <React.Fragment>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          onClick: sendEvent
        })
      )}
    </React.Fragment>
  );
};

export default ClickGA;

//<LinkGA action={'PersonalStories Anastasia press'} onClickTrans={[setStoryNum, 1]}>...</LinkGA>
