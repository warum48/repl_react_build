import React from 'react';
import useId from 'react-use-uuid';

const Svg = (props) => {
    const id = useId();
    return (
        <>
        {props.forceImg ?
        <img src={props.src} className={`img-fluid  ${props.className }`} width={props.width} height={props.height}/>
        :
        <object className={`img-fluid ${props.className?props.className:''}`} type="image/svg+xml" data={props.src} name={id}></object>
        }
        </>
    );
}

export default Svg;