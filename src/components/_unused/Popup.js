import React , {useRef, useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
//import { useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';
import {gaEvents} from 'components/SpGA/gaEvents';


const Popup = (props) => {
 
 //const [menuIsOn, toggleMenuIsOn] = useToggle();
 // https://stackoverflow.com/questions/34114679/convert-a-react-element-to-a-jsx-string

    
    const [db] = useState([
            {
                id:1,
                date:"1.11.2021",
                head:"",
                content:`
                        <h2>header</h2>
                        <h3>просто вставка хтмл кода, можно использовать ссылки</h3>
                        <a className="a_text a_main"  rel="noreferrer noopener" href="https://www.google.com" target="_blank">
                          <div>Ccылка в контенте</div>
                        </a>`,
                reactcontent:''
            },

            {
                id:2,
                date:"3.11.2021",
                head:"",
                content:`
                        <h2>header2</h2>
                        <h3>вставка react кода, можно использовать компоненты</h3>
                        `,
                reactcontent:<LinkGA action={'item click'+  props.curPopupNum}>
                                  <a className="a_text a_main"  rel="noreferrer noopener" href="#">
                                    <div>Ccылка в контенте</div>
                                  </a> 
                            </LinkGA>
            }
        ]
        )
    const [curPopup, setCurPopup] = useState(db[0]); 
    useEffect(() => {
      setCurPopup(db[props.curPopupNum]);
      console.log('db[0]', db[0]);
    }, [props.curPopupNum]);
    


  return (
    
        
        <div className="popup_box">
            <div className="popup-bg" onClick={props.closePopup}></div>
            <div className="popup">
                <div className="popup-wrap">
                
                    <h1>popup</h1>
                    <div onClick={props.closePopup}>X</div>
                    <div>prev</div>
                    <div>next</div>
                    <div>{props.curPopupNum}</div>
                    <div>{curPopup.date}</div>
                    <div dangerouslySetInnerHTML={{__html:curPopup.content}} />
                    {curPopup.reactcontent}
                </div>
            </div>
        </div>
  )
}

export default Popup

