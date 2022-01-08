import React, { useEffect, useRef, useState } from 'react';

const HideIfOnTop = (props) => {
    const refa = useRef(null);
    const [ishid, setIsHid] = useState(false);

    function checkScrollTop() {
        //console.log(window.scrollY);
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        //console.log('scrollHeight', scrollHeight);
        //console.log('window.scrollY', window.scrollY);
        if (window.scrollY + window.innerHeight < scrollHeight - 50) {
           // refa.current.style.display = 'block';
           setIsHid(false);
        }
        else {
          //  refa.current.style.display = 'none';
          setIsHid(true);
        }
    }

    useEffect(() => {
        // Anything in here is fired on component mount.
        let timer1 = setInterval(() => checkScrollTop(), 500);
        return () => {
            // Anything in here is fired on component unmount.
            clearInterval(timer1);
        }
    }, [])

    return (
        <div ref={refa} className={` ${ishid ? "hide_mob" : ""} `}>{props.children}</div>
    );
};

export default HideIfOnTop;
