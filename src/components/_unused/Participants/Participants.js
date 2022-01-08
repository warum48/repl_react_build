import React, {useState, useEffect, useRef} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {useOnScreen, useInterval, useTimeout, useEffectDebugger, useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';
import {gaEvents} from 'components/SpGA/gaEvents';
import {useHash} from 'react-use';
import ScrollHashEventDiv from 'components/SpGA/ScrollHashEventDiv';
import ScrollEventDiv from 'components/SpGA/ScrollEventDiv';



const Participants = (props) => {

        const [value, setValue] = useState(0);
        const [participantsAr, setDB] = useState(null);
        const [curPartNum, setCurPartNum] = useState(null);
        const [curPart, setCurPart] = useState(null);
        const [hash, setHash] = useHash();
        const mounted = useRef(false);

        const tp = useRef(null);
        tp.current = new Typograf({ locale: ['ru', 'en-US'] });

        function hasDigitsOnly(value) {
            //console.log(value);
            //console.log(/^-?\d+$/.test(value));
            return /^-?\d+$/.test(value);
        }
        
        function setCurPartNumProxy(num){
            if (props.setShowProduct) {
                props.setShowProduct(false);
            }
            if (props.setDbLoaded){
                //console.log('setDBL');
                props.setDbLoaded(false);
            }
            
            setCurPartNum(num);
            var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: 'uchastniki uch'+(num+1)+'_press', eventLabel: 'Click'};
            gaEvents.sendEvent(event);
        }

        useEffect(() => {
            var hsh = window.location.hash.substring(1);
            fetch('./assets/json/participants.json')
                .then(res => res.json())
                .then(db => {
                    setDB(db);
                    if(props.setDbLoaded){
                    props.setDbLoaded(true);
                    }
                    //console.log('db loaded');
                    if (hasDigitsOnly(hsh)) {
                        setCurPartNum(Number(hsh));
                    }
                })
        }, []);

        useEffect(() => {
            //console.log('hash', hash);
            var hsh = hash.substring(1);
            if (hasDigitsOnly(hsh)) {
                setCurPartNum(Number(hsh));
            }else{
                setCurPartNum(null);
            }
        }, [hash]);



        useEffect(() => {
            //console.log('curPartNum', curPartNum);
            if (mounted.current) {
                //console.log('curPartNum-ch', curPartNum);
                if (props.setShowProduct) {
                    if (curPartNum == null) {
                        props.setShowProduct(true);
                        setCurPart(null);
                    }
                    else {
                        props.setShowProduct(false);
                    }
                }
                
                //console.log('participantsAr', participantsAr);
                if (participantsAr) {
                    //console.log('participantsAr[curPartNum]-----', participantsAr[curPartNum]);
                    setCurPart(participantsAr[curPartNum]);
                    if (curPartNum == null) {
                        if(props.where != 'main_page'){
                        setHash('list');
                        }
                    }
                    else {
                        setHash(curPartNum);
                    }
                }

                if(props.where != 'main_page'){
                window.scrollTo({
                    top: 0,
                });
                }
                
                if(props.setDbLoaded){
                    props.setDbLoaded(true);
                }
            }
            else {
                mounted.current = true;
            }

        }, [curPartNum,participantsAr]);


  return (
    
    
        <div className={`participants ${props.where == 'main_page' ? 'main_page' : 'participants_page' }` }>
              
              
              { props.where == 'main_page' &&
              <>
                { participantsAr?.map((part, index) =>
                    <div key={index} className={"user_main item"+(index+1)}>
                      <img className="img-fluid" src={"./assets/img/user_circl_"+(index+1)+".png"}/>
                    </div>
                )}
                <LinkGA action={'mainpage Uchastniki button_press'}>
                    <a href="participants.html"  rel="noreferrer noopener" className="btn_style">Участники</a>
                </LinkGA>
                </>
                }
                
                { props.where == 'participants_page' && curPartNum == null && participantsAr &&
                <>
                    <Container className="animate__animated animate__fadeIn">
                      <Row>
                        <Col md={{ span:11, offset:1 }}>
                            <div className="participants_head">
                                <img src="./assets/img/participants_head.png" className="img-fluid" />
                            </div>
                            <div className="participants_info highlights">У&nbsp;каждого из&nbsp;наших героев&nbsp;&mdash; своя история, которая привела его к&nbsp;осознанию необходимости перемен. Каждый готов трудиться для достижения перемен и&nbsp;показать лучший результат в&nbsp;конце марафона.</div>
                            <div className="users_inline">
                             
                                { participantsAr.map((part, index) =>
                                    <div key={index} className={"user_inner item"+(index+1)} onClick={(num) => setCurPartNumProxy(index)}>
                                     
                                      {/*<ScrollEventDiv id={"uchastniki nnn"+(index+1) +"_dokrut"} className="scrollDiv"/>*/}
                                      <img src={"./assets/img/user_"+(index+1)+".jpg"}/>
                                      <div className="user_sname">{part.name.split(' ')[1]}</div>
                                      <div className="user_name">{part.name.split(' ')[0]}</div>
                                      <ScrollHashEventDiv id={"uchastniki n"+(index+1) +"_dokrut"}/>
                                    </div>
                                    
                                )}
                                
                                <div className="user_inner user_inner_last_boxtxt">Следите за&nbsp;обновлениями, читайте полезные материалы и&nbsp;меняйтесь вместе с&nbsp;нами, время пришло!</div>
                            </div>
                        </Col>
                      </Row>
                    </Container>
                </>
                }
                
                {/*<div>num{curPartNum}</div>
                <div>num{curPart}</div>*/}
                
                
                
                { props.where == 'participants_page' && curPart != null && curPartNum != null && participantsAr &&
                <>
                    <Container className="animate__animated animate__fadeIn">
                      <Row>
                        <Col md={{ span:11, offset:1 }}>
                            <div className="participants_detail">
                                <div className="participants_detail_sname"><div className="ico_back" onClick={()=>setCurPartNum(null)}></div>{curPart.name.split(' ')[1]}</div>
                                <div className="participants_detail_name">{curPart.name.split(' ')[0]}</div>
                                
                                <div className="participants_detail_info">
                                    <Row>
                                        {curPart.imgfull &&
                                        <Col className="col_photo">
                                            <div className="participants_detail_photo">
                                                <img className="img-fluid" src={curPart.imgfull}/>
                                            </div>
                                        </Col>
                                        }
                                        <Col className="col_text">
                                            <div className="participants_detail_txt">
                                                <div className="instagram">
                                                    <a href={curPart.insta} target="_blank" className="instagram_link"></a>
                                                    <div className="instagram_photo"><img className="img-fluid" src={"./assets/img/user_circl_" + (curPartNum+1)+".png"}/></div>
                                                    {/*<div className="instagram_name">@{curPart.insta.split('https://www.instagram.com/').join('').split('/')[0]}</div>*/}
                                                    <div className="instagram_name">@{new URL(curPart.insta).pathname.split('/').join('')}</div>
                                                </div>
                                                <div className="hrline"></div>
                                                <div className="params">
                                                    <div className="params-title">Возраст</div>
                                                    <div className="params-count hi_test">{curPart.age} лет</div>
                                                </div>
                                                <div className="hrline"></div>
                                                <div className="params">
                                                    <div className="params-title">Вес</div>
                                                    <div className="params-count">{curPart.weight} кг</div>
                                                </div>
                                                <div className="hrline"></div>
                                                <div className="params">
                                                    <div className="params-title">Содержание жира</div>
                                                    <div className="params-count">{curPart.fat || '-'} кг</div>
                                                </div>
                                                <div className="hrline"></div>
                                                <div className="params">
                                                    <div className="params-title">Содержание мышц</div>
                                                    <div className="params-count">{curPart.muscle || '-'} кг</div>
                                                </div>
                                                <div className="hrline"></div>
                                                
                                                <div className="user_about" dangerouslySetInnerHTML={{__html: tp.current.execute(curPart.info)}}></div>
                                                
                                                <div className="hrline"></div>
                                                <div className="user_point">
                                                    <div className="user_point-head">Цель</div>
                                                    <div className="user_point-detail" dangerouslySetInnerHTML={{__html: tp.current.execute(curPart.aim)}}></div>
                                                </div>
                                                <ScrollHashEventDiv id={"anketa_dokrut"}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                      </Row>
                    </Container>
                            
                </>
                }
             
             
              
              
          </div>
  )
}

export default Participants 

//{ props.where == 'main_page' &&
// }

