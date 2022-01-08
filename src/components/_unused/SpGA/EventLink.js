import React, { Component } from 'react';
import {gaEvents} from './gaEvents';

//export default function EventLink(){
const EventLink = (props) => {    
    
    function sendEvent(){
        console.log('clicklocal')
        var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: props.action, eventLabel: 'Click'};
        gaEvents.sendEvent(event);
        //<button onClick={() => sendEvent()}>test event</button>
    }
    
    return (
            <div onClick={() => sendEvent()}>{props.children}</div>
        );
};

export default EventLink;


