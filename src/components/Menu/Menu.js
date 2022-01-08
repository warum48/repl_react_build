import React , {useRef} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/GoogleAnalytics/LinkGA';
import {gaEvents} from 'components/GoogleAnalytics/gaEvents';


const Menu = (props) => {
 
 const [menuIsOn, toggleMenuIsOn] = useToggle();
 //props.screenProduct_ = useRef();
 
 function scrollProductsIntoView(){
   //props.screenProduct_.current.scrollIntoView({ behavior: 'smooth' });
  props.screenProduct.current.scrollIntoView({ behavior: 'smooth' });
   var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: props.action, eventLabel: 'Click'};
        gaEvents.sendEvent(event);
 }

  return (
    
        
        <div className={`inner_navigation ${menuIsOn ? 'open_nav' : '' }` }>
              <section className="mod model-2 mobi">
                  <div className={`menu_but ${menuIsOn ?  'active' : 'passive'}`} onClick={toggleMenuIsOn}>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                  </div>
              </section>
              
              <div className="menu_list">
                
                { props.skip != 1 ?
                <LinkGA action={'Menu Main press'}>
                      <a className="a_text a_main"  rel="noreferrer noopener" href="index.html">
                        <div>Главная</div>
                      </a> 
                </LinkGA>
                :
                <div className="a_text a_main">Главная</div>
                }
  
                { props.skip != 2 ?
                <LinkGA action={'Menu Personal stories press'}>
                      <a className="a_text a_stories"  rel="noreferrer noopener" href="stories.html">
                        <div>Личные истории</div>
                      </a> 
                </LinkGA>
                :
                <div className="a_text a_stories">Личные истории</div>
                }
                
                { props.skip != 3 ?
                <LinkGA action={'Menu Expert press'}>
                      <a className="a_text a_advice"  rel="noreferrer noopener" href="advice.html">
                        <div>Советы эксперта</div>
                      </a> 
                </LinkGA>
                :
                <div className="a_text a_advice">Советы эксперта</div>
                }
                
                
              
              </div>
          </div>
  )
}

export default Menu

