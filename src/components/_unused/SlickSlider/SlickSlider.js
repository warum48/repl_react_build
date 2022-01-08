import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import "./SimpleSlider.css";

export default class SlickSlider extends Component {
  constructor() {
    super();

    this.state = {
      infoDB: [{}, {}, {}, {}, {} ]
    }
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="slider_video">
        <Slider {...settings}>
          <div className="slidebg s1">
            <div className="bg"><img src="./assets/img/video_prev1.jpg" className="img-fluid" /></div>
            <div className="content">
              <div className="line1">Первая неделя марафона: Каждый готов трудиться для достижения перемен и показать лучший результат в конце марафона.</div>
            
            </div>
          </div>
          <div className="slidebg s2">
            <div className="bg"><img src="./assets/img/video_prev1.jpg" className="img-fluid" /></div>
            <div className="content">
              <div className="line1">if you are still in doubt<br/>see what awaits you:</div>
            
            </div>
          </div>
          <div className="slidebg s3">
            <div className="bg"><img src="./assets/img/video_prev1.jpg" className="img-fluid" /></div>
            <div className="content">
              <div className="line1">if you are still in doubt<br/>see what awaits you:</div>
            </div>
          </div>
          <div className="slidebg s4">
            <div className="bg"><img src="./assets/img/video_prev1.jpg" className="img-fluid" /></div>
            <div className="content">
              <div className="line1">if you are still in doubt<br/>see what awaits you:</div>
            
            </div>
          </div>
          
          {/*
          {this.state.infoDB.map((slide, index) =>
                    <div key={index} className={"slidebg s"+(index+1)}>
                      <h3></h3>
                    </div>
                )}
                
                */}
        </Slider>
      </div>
    );
  }
}