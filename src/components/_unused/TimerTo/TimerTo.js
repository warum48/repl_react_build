import React, { useState, useRef, useEffect } from 'react';

export default function TimerTo(props) {
    
    const [isOn, setIsOn] = useState(true);
    const timer = useRef();

    const [time_str, setTimeStr] = useState('');
    useEffect(() => {
	  showTimeTo(props.toTime);
	  return () => clearTimeout(timer.current);
	}, []);

    function makeTwoDgigit(text) {
        if (text.length < 2) {
            var text = '0' + text;
        }
        return text;
    }

    function showTimeTo(eventMillisecs) {
        //console.log('SHOW', eventMillisecs)
        var currentDate = new Date();
        var currentMillisecs = currentDate.getTime();
        var msecs = eventMillisecs - currentMillisecs;


        if (msecs < 0) {
            msecs = 0;
        }

        var secs = Math.ceil(msecs / 1000);
        var mins = Math.floor(secs / 60);
        var hours = Math.floor(mins / 60);
        var days = Math.floor(hours / 24);
        var weeks = Math.floor(days / 7);

        msecs = String(msecs % 1000);
        secs = String(secs % 60);
        mins = String(mins % 60);
        hours = String(hours % 24);
        days = String(days % 24);
        //$timer.text(makeTwoDgigit(hours) + ':' + makeTwoDgigit(mins) + ':' + makeTwoDgigit(secs));
        setTimeStr(makeTwoDgigit(days) + ':' + makeTwoDgigit(hours) + ':' + makeTwoDgigit(mins));// + ':' + makeTwoDgigit(secs))

        if (msecs <= 0) {
            msecs = 0;

            console.log('timehascome');

            //props.onComplete();
        }
        else {
            //setState('content.' + hasPacks + '.timer');
            timer.current = setTimeout(function() {
                showTimeTo(eventMillisecs);
            }, 1000);
        }
    }

    


    return (
         
    <span className="timerbox">{time_str}</span> 
    
    );

}