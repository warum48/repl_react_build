import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Tabs, Tab, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';
import { gaEvents } from 'components/SpGA/gaEvents';
import ScrollHashEventDiv from 'components/SpGA/ScrollHashEventDiv'

const ProductTabs = (props) => {
  //props.screenProduct_ = useRef();

  return (
            <div className="block_product" >
              <Container>
                <Row className="line1">
                  <Col md='6'>
                    <div className="prodcut_img_head">
                      <img src="./assets/img/product_img_head.png" className="img-fluid" />
                    </div>
                  </Col>
                  <Col md='6'>
                    <div className="highlights">Постоянный контроль результатов, здоровья, самочувствия и&nbsp;спортивного прогресса: на&nbsp;страже вашего обновления&nbsp;&ndash; устройства экосистемы Samsung Galaxy</div>
                  </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey={props.defaultActiveKey} >
                  <Row  ref={props.screenProduct_childRef}>
                    <Col md={{ span:11, offset:1 }}>
                      <ScrollHashEventDiv id={props.scrollEventName}/>
                      <div className="btns_center">
                        <Nav variant="pills" className="justify-content-start">
                          <Nav.Item>
                            <LinkGA action='product Watch_press'>
                            <Nav.Link eventKey="first">Смарт-устройство</Nav.Link>
                            </LinkGA>
                          </Nav.Item>
                          <Nav.Item>
                            <LinkGA action='product Phone_press'>
                            <Nav.Link eventKey="second">Смартфон</Nav.Link>
                            </LinkGA>
                          </Nav.Item>
                          <Nav.Item>
                            <LinkGA action='product Buds_press'>
                            <Nav.Link eventKey="third">Наушники</Nav.Link>
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
                            <Col lg={{ span:5, offset:1 }} md={{ span:11, offset:1 }}>
                              <div className="tab_img size1">
                                <img src="./assets/img/product_img_watch.png" className="img-fluid" />
                              </div>
                            </Col>
                            <Col lg={{ span:6, offset:0 }} md={{ span:11, offset:1 }}>
                              <div className="tab_about">Внутри стильного корпуса, помимо привычного функционала для подсчета шагов и&nbsp;мониторинга эффективности тренировок, скрывается настоящий кабинет health*-коуча. Благодаря этому устройству вы&nbsp;будете в&nbsp;курсе того, что происходит в&nbsp;вашем организме. <LinkGA action='product Galaxy Watch4 _intext'><a href="http://sp.mhealth.ru/go/mh_galaxy_watch4" target="_blank">Galaxy Watch4</a></LinkGA> под силу за&nbsp;15&nbsp;секунд сделать биоимпедансный анализ состава тела, чтобы отследить прогресс в&nbsp;тренировках на&nbsp;пути к&nbsp;здоровому и&nbsp;красивому телу. А&nbsp;также с&nbsp;легкостью измерить артериальное давление и&nbsp;ЭКГ в&nbsp;любом месте и&nbsp;в&nbsp;любое время<sup>1</sup>. Функция анализа сна поможет сделать ваш отдых более продуктивным, а&nbsp;также определит уровень кислорода в&nbsp;крови и&nbsp;характер храпа (если он&nbsp;присутствует)<sup>2</sup>.</div>
                              <div className="tab_head"><LinkGA action='product Galaxy Watch4 Classic _header'><a href="http://sp.mhealth.ru/go/mh_galaxy_watch4_classic" target="_blank">Galaxy Watch4 Classic</a></LinkGA></div>
                              <div className="tab_more">
                                <ul><li>Изысканный классический дизайн с&nbsp;корпусом из&nbsp;нержавеющей стали, который отлично подчеркнет любой твой образ.</li> <li>Девайс считает количество пройденных шагов, проверяет расход калорий и&nbsp;прокладывает маршрут при помощи GPS.</li> <li>Датчик с&nbsp;высокой точностью Samsung BioActive для определения состава тела в&nbsp;режиме реального времени<sup>3</sup>.</li> <li>Внутри Watch4 Classic содержится свыше 90 &middot; встроенных тренировок для точного мониторинга.</li> <li>Измеряет ЭКГ и&nbsp;артериальное давление<sup>1</sup>.</li> <li>Трекер сна не&nbsp;только отслеживает, но&nbsp;и&nbsp;дает рекомендации по&nbsp;налаживанию ритмов.</li></ul>
                              </div>
                            </Col>
                            
                          </Row>
                          
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            <Col lg={{ span:5, offset:1 }} md={{ span:11, offset:1 }}>
                              <div className="tab_img size2">
                                <img src="./assets/img/product_img_phone.png" className="img-fluid" />
                              </div>
                            </Col>
                            <Col lg={{ span:6, offset:0 }} md={{ span:11, offset:1 }}>
                              <div className="tab_about">Большой объем встроенной памяти, широкий дисплей и&nbsp;высококачественная съемка делают любую модель серии одним из&nbsp;идеальных спутников для преображения тела, образа жизни и&nbsp;мышления&nbsp;&ndash; смартфоны Samsung Galaxy S21, S21+ и&nbsp;S21&nbsp;Ultra. С&nbsp;помощью четырех камер S21 Ultra и&nbsp;трех камер у&nbsp;других моделей линейки Galaxy S21 и&nbsp;функции ультраширокоугольной съемки можно не&nbsp;просто снимать упражнения для отчетов, но&nbsp;и&nbsp;без стеснения выкладывать их&nbsp;в&nbsp;Сеть&nbsp;&ndash; качество изображения, автофокус и&nbsp;оптическая стабилизация позволяют. Мощный процессор дает возможность одновременно заниматься делами, смотреть фильмы и&nbsp;рассчитывать калории без замедления работы. А&nbsp;аккумуляторы на&nbsp;4000, 4800 и&nbsp;5000 мА&middot;ч и&nbsp;быстрая беспроводная зарядка с&nbsp;Fast Wireless Charging&nbsp;2.0 помогут всегда оставаться онлайн и&nbsp;осуществлять обратную связь с&nbsp;тренером.</div>
                              <div className="tab_head"><LinkGA action='product Galaxy Phone S21 _header'><a href="http://sp.mhealth.ru/go/mh_galaxy_s21" target="_blank">Смартфоны Galaxy S21</a></LinkGA></div>
                              <div className="tab_more">
                                <ul><li>Возможность снимать видео с&nbsp;разрешением 8К&nbsp;и&nbsp;скоростью 24&nbsp;кадра в&nbsp;секунду на&nbsp;уровне кинофильмов.</li> <li>Гибридный оптический зум Space Zoom до&nbsp;30х и&nbsp;100x и&nbsp;блокировка обеспечивают четкие и&nbsp;точные снимки.</li> <li>Лучшая производительность из&nbsp;всей серии Galaxy S&nbsp;благодаря 5-нанометровому процессору.</li> <li>Адаптивный экран 120&nbsp;Гц со&nbsp;встроенным интеллектом оптимизирует изображение и&nbsp;обеспечивает плавную прокрутку.</li> <li>Умный аккумулятор анализирует часто используемые приложения и&nbsp;оптимизирует всю твою работу.</li></ul>
                              </div>
                            </Col>
                            
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            
                            <Col lg={{ span:5, offset:1 }} md={{ span:11, offset:1 }}>
                              <div className="tab_img size1">
                                <img src="./assets/img/product_img_headphones.png" className="img-fluid" />
                              </div>
                            </Col>
                            <Col lg={{ span:6, offset:0 }} md={{ span:11, offset:1 }}>
                              <div className="tab_about">Двухполосная акустическая система с&nbsp;глубоким басом и&nbsp;чистыми высокими тонами поможет задать лейтмотив тренинга и&nbsp;полностью погрузиться в&nbsp;любимые треки. Где&nbsp;бы вы&nbsp;ни&nbsp;были&nbsp;&ndash; на&nbsp;пробежке в&nbsp;городе, на&nbsp;полупустой площадке для воркаута в&nbsp;парке или в&nbsp;заполненном спортзале,&nbsp;&ndash; активное шумоподавление не&nbsp;даст окружающим прервать запал на&nbsp;пути к&nbsp;преображению. За&nbsp;это можно поблагодарить специальные технологии, которые фильтруют нежелательные шумы и&nbsp;обеспечивают комфортное прослушивание музыки и&nbsp;общение с&nbsp;близкими. Кстати, если вы&nbsp;настоящий меломан, вам придется по&nbsp;душе еще одна фича Galaxy Buds2&nbsp;&ndash; эквалайзер с&nbsp;шестью предустановленными настройками. Он&nbsp;позволяет более тонко настраивать звук под различные музыкальные предпочтения&nbsp;&ndash; будь&nbsp;то метал, хип-хоп, инди или даже легкий лаунж.</div>
                              <div className="tab_head"><LinkGA action='product Galaxy Buds2 _header'><a href="http://sp.mhealth.ru/go/mh_galaxy_buds2" target="_blank">Galaxy Buds2</a></LinkGA></div>
                              <div className="tab_more">
                                <ul><li>Двухполосные динамики для глубокого и&nbsp;насыщенного звука.</li> <li>Система активного шумоподавления устраняет до&nbsp;98% внешних шумов.</li> <li>Интеллектуальная очистка речи от&nbsp;шумов на&nbsp;базе алгоритмов машинного обучения.</li> <li>Специальная конструкция корпуса для минимизации уровня влияния шума ветра.</li> <li>До&nbsp;20&nbsp;часов воспроизведения музыки с&nbsp;зарядным футляром при включенном активном шумоподавлении.</li> <li>Автоматическое переключение между устройствами Samsung Galaxy.</li> <li>Комфортное использование в&nbsp;течение всего дня благодаря компактному размеру.</li> <li>4&nbsp;актуальные расцветки на&nbsp;выбор.</li></ul>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                <Row>
                    <Col md={{ span:11, offset:1 }}>
                      <div className="dislcamer">
                        <p>*health&nbsp;&ndash; здоровье</p>
                        <p><sup>1</sup>&nbsp;Предназначено для использования при занятиях фитнесом и&nbsp;оценке общего физического состояния. Не&nbsp;предназначено для выявления, диагностики, лечения каких-либо заболеваний, не&nbsp;обладает функциями изделия медицинского назначения. Результаты измерения предназначены только для вашего личного ознакомления. Пожалуйста, обратитесь за&nbsp;консультацией к&nbsp;квалифицированному медицинскому специалисту.<br/>Не&nbsp;используйте при наличии имплантируемых кардиостимуляторов или иных медицинских устройств.<br/>Не&nbsp;используйте при беременности.<br/>Результаты измерений могут быть неточными для пользователей младше 20&nbsp;лет.<br/>Поддерживаются только смартфоны на&nbsp;Android&nbsp;8.0&nbsp;ОС и&nbsp;новее.<br/>Доступность функции БИА может отличаться в&nbsp;зависимости от&nbsp;страны и&nbsp;региона.</p>
                        <p><sup>2</sup>&nbsp;Функция определения качества сна предназначена для использования при занятиях фитнесом и&nbsp;оценке общего физического состояния. Не&nbsp;предназначено для выявления, диагностики, лечения каких-либо заболеваний, не&nbsp;обладает функциями изделия медицинского назначения.<br/>Измерения предназначены только для вашего личного ознакомления. Пожалуйста, обратитесь за&nbsp;консультацией к&nbsp;квалифицированному медицинскому специалисту.<br/>Доступность функции может отличаться в&nbsp;зависимости от&nbsp;страны и&nbsp;региона.<br/>Для использования функции контроля сна Galaxy Watch4 Classic должны быть подключены к&nbsp;смартфону.<br/>Для лучшего обнаружения и&nbsp;мониторинга храпа расположите смартфон на&nbsp;устойчивой поверхности рядом с&nbsp;головой так, чтобы нижняя часть смартфона была направлена к&nbsp;вашей голове.<br/>По&nbsp;умолчанию функция обнаружения храпа отключена. Пользователь может в&nbsp;любое время активировать эту настройку на&nbsp;своем смартфоне, используя приложение Samsung Health версии 6.18 или новее.<br/>Расширенные аналитические данные от&nbsp;Национального фонда сна доступны только на&nbsp;смартфоне, подключенном к&nbsp;GalaxyWatch4&nbsp;Classic.<br/>Доступность приложений и&nbsp;сервисов может отличаться в&nbsp;зависимости от&nbsp;страны и&nbsp;региона.</p>
                        <p><sup>3</sup>&nbsp;Предназначено для использования при занятиях фитнесом и&nbsp;оценке общего физического состояния. Не&nbsp;предназначено для выявления, диагностики, лечения каких-либо заболеваний, не&nbsp;обладает функциями изделия медицинского назначения. Результаты измерения предназначены только для вашего личного ознакомления. Пожалуйста, обратитесь за&nbsp;консультацией к&nbsp;квалифицированному медицинскому специалисту.<br/>Не&nbsp;используйте при наличии имплантируемых кардиостимуляторов или иных медицинских устройств.<br/>Не&nbsp;используйте при беременности.<br/>Результаты измерений могут быть неточными для пользователей младше 20&nbsp;лет.<br/>Поддерживаются только смартфоны на&nbsp;Android&nbsp;8.0&nbsp;ОС и&nbsp;новее.<br/>Доступность функции БИА может отличаться в&nbsp;зависимости от&nbsp;страны и&nbsp;региона.</p>
                        {/*<div>$DisclamerArticle</div>*/}
                        
                        
                          <div dangerouslySetInnerHTML={{__html:props.discl}}></div> 
                          
                      </div>
                    </Col>
                  </Row>
              </Container>
            </div>
            
  )
}

export default ProductTabs
