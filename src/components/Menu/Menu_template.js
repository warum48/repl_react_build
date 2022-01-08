import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';
import {gaEvents} from 'components/SpGA/gaEvents';


const Menu = (props) => {
 
 const [menuIsOn, toggleMenuIsOn] = useToggle();

  return (
    
    
        <div className={`inner_navigation ${menuIsOn ? 'open_nav' : '' }` }>
              
              { props.skip != 0 ?
              <LinkGA action={'page_home'}>
                    <a href="index.html">
                      <div>home</div>
                    </a> 
              </LinkGA>
              :
              <div>home</div>
              }
              
              { props.skip != 1 ?
              <LinkGA action={'page_1'}>
                    <a href="page1.html">
                      <div>page1</div>
                    </a> 
              </LinkGA>
              :
              <div>page1</div>
              }

              { props.skip != 2 ?
              <LinkGA action={'page_2'}>
                    <a href="page2.html">
                      <div>page2</div>
                    </a> 
              </LinkGA>
              :
              <div>page2</div>
              }
          </div>
  )
}

export default Menu

