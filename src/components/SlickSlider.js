import React, {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Html from "components/Html";
//import "./SimpleSlider.css";

const SlickSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    //centerMode:true
  };
  
  const [slidesAr, setSliderAr] = useState([]);
  
  useEffect(() => {
    const ar = [];
    for (var i = 0; i < props.numOfSlides; i++) {
      if(props.numOfSlides > 1){
        ar.push("./assets/img/calendar/"+props.id+"/" + (i+1) + (props.fileType || ".jpg"));
      }else{
         ar.push("./assets/img/calendar/"+props.id+ (props.fileType || ".jpg"));
      }
    }
    setSliderAr(ar);
    console.log('ar',ar);
  }, [props.numOfSlides, props.id]);
  

  return (
    <div className="sp_slider_container" id={props.id}>
      <Slider {...settings}  key={props.id}>
        {slidesAr.map((item, index) => (
          <div key={index}>
           
            <img src={item} className="img-fluid"/>
            {props.comments && <Html className={"commentbox"}>{props.comments[index]}</Html>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
