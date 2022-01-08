import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';

//export default function SimpleParallax() {
const FooterNav = (props) => {
 
 const [menuIsOn, toggleMenuIsOn] = useToggle();
 const namar = ['Darovina', 'Filippova', 'Lobasheva', 'Chag', 'Kulikova'];

  return (
    
    
              <div className="footer">
            <div className="morebox">
              <Container>
                <Row>
                    <Col>
                      <div className="footer_navigation">
                        {props.skip != 1 && 
                        <LinkGA action={namar[props.skip-1] + ' Darovina press'}>
                        <a href="bloger1.html" className="peop_box peop1"  >
                          <div className="imgbox"></div>
                        </a> 
                        </LinkGA>}
                        {props.skip != 2 && 
                        <LinkGA action={namar[props.skip-1] + ' Filippova press'}>
                        <a href="bloger2.html" className="peop_box peop2" >
                          <div className="imgbox"></div>
                        </a>
                        </LinkGA>
                        }
                        {props.skip != 3 && 
                        <LinkGA action={namar[props.skip-1] + ' Lobasheva press'}>
                        <a href="bloger3.html" className="peop_box peop3">
                          <div className="imgbox"></div>
                        </a>
                        </LinkGA>
                        }
                        {props.skip != 4 && 
                        <LinkGA action={namar[props.skip-1] + ' Chag press'}>
                        <a href="bloger4.html" className="peop_box peop4">
                          <div className="imgbox"></div>
                        </a>
                        </LinkGA>
                        }
                        {props.skip != 5 && 
                        <LinkGA action={namar[props.skip-1] + ' Kulikova press'}>
                        <a href="bloger5.html" className="peop_box peop5">
                          <div className="imgbox"></div>
                        </a>
                        </LinkGA>
                        }
                      </div>
                    </Col>
                </Row>
              </Container>
            </div>
             
            <div className="logobox">
              <Container>
                  <Row>
                      <Col>
                        <div className="box_rel">
                          <a  className="ico_open"  onClick={toggleMenuIsOn}></a>
                          <LinkGA action='spLogo'>
                          <a className="logo_cos" href="https://www.cosmo.ru/" target="_blank">
                              <span>
                                <object className="img-fluid" type="image/svg+xml" data="./assets/img/logo_cos.svg"></object>
                              </span>
                            </a>
                          </LinkGA>  
                          
                          <a className="logo_sp" href="https://bit.ly/3xI8oIj" target="_blank">
                              <span>
                                <object className="img-fluid" type="image/svg+xml" data="./assets/img/logo_sp.svg"></object>
                              </span>
                            </a>
                        </div>
                      </Col>
                  </Row>
              </Container>
            </div>
            <div className="disclamer">
             <Container>
                <Row>
                  <Col>
                    <div className="box_rel">
                      <div className="info_txt">ООО «Тева» Россия, 115054, г.&nbsp;Москва, ул. Валовая, д.&nbsp;35, тел.: +7&nbsp;(495)&nbsp;644-22-34. HLKF-RU-00&nbsp;578-Cons-07.2021</div>
                      <div className="wrap">
                        <object className="img-fluid desk" type="image/svg+xml" data="./assets/img/discl_desk.svg"></object>
                        <object className="img-fluid mobi" type="image/svg+xml" data="./assets/img/discl_mobi.svg"></object>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              
            </div>
          </div>
  )
}

export default FooterNav

