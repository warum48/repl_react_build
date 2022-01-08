import React, {useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Tabs, Tab, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';

const ProductTabs = (props) => {
    
    return (

<Container>
              <Tab.Container id="left-tabs-example" defaultActiveKey={props.activeTabName}>
                <Row>
                  <Col>
                    <div className="btns_center">
                      <Nav variant="pills" className="justify-content-center">
                        <Nav.Item>
                          <LinkGA action='tab1 press'>
                          <Nav.Link eventKey="first">tab1</Nav.Link>
                          </LinkGA>
                        </Nav.Item>
                        <Nav.Item>
                          <LinkGA action='tab2 press'>
                          <Nav.Link eventKey="second">tab2</Nav.Link>
                          </LinkGA>
                        </Nav.Item>
                        <Nav.Item>
                          <LinkGA action='tab3 press'>
                          <Nav.Link eventKey="third">tab3</Nav.Link>
                          </LinkGA>
                        </Nav.Item>
                      </Nav>
                     

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        
                        <Row>
                          <Col md='6'>
                            <div className="tab_head">TAB 1 HEAD</div>
                            <div className="tab_more">
                              <p>tab1 content</p>
                            </div>
                          </Col>
                          <Col md='6'>
                            <div className="tab_img size1">
                              <img src="./assets/img/img11.png" className="img-fluid" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col md='6'>
                            <div className="tab_head">TAB 2 HEAD</div>
                            <div className="tab_more">
                              <p>tab2 content</p>
                            </div>
                          </Col>
                          <Col md='6'>
                            <div className="tab_img size2">
                              <img src="./assets/img/img12.png" className="img-fluid" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col md='6'>
                            <div className="tab_head">TAB 3 HEAD</div>
                            <div className="tab_more">
                              <p>tab3 content</p>
                            </div>
                          </Col>
                          <Col md='6'>
                            <div className="tab_img size1">
                              <img src="./assets/img/img13.png" className="img-fluid" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Container>
            )
}