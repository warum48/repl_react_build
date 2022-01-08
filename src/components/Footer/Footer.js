import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/GoogleAnalytics/LinkGA';

//export default function SimpleParallax() {
const Header = (props) => {
 
 const [menuIsOn, toggleMenuIsOn] = useToggle();

  return (
    
    
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                       <div className="box_rel">
                        <LinkGA action='GOT2B_logo'>
                        <a className="logo_sp" href={props.onmain? "#product" : "index.html#product"} rel="noreferrer noopener">
                            <span>
                              <object className="img-fluid" type="image/svg+xml" data="./assets/img/logo_sp.svg"></object>
                            </span>
                        </a>
                      </LinkGA> 
                      <LinkGA action='Travlinet_logo'>
                      <a className="logo_net" href="https://xn--80aejlonqph.xn--p1ai" target="_blank"  rel="noreferrer noopener">
                            <span>
                              <object className="img-fluid" type="image/svg+xml" data="./assets/img/logo_net.svg" name="logo_net"></object>
                            </span>
                          </a>
                          </LinkGA> 
                        <LinkGA action='Cosmo_logo'>
                        <a className="logo_cos" href="https://www.cosmo.ru/" target="_blank"  rel="noreferrer noopener">
                            <span>
                              <object className="img-fluid" type="image/svg+xml" data="./assets/img/logo_cos.svg"></object>
                            </span>
                          </a>
                        </LinkGA>  
                        
                        
                      </div>
                    </Col>
                </Row>
            </Container>
          </footer>
  )
}

export default Header

