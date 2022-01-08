import React, { Component } from 'react';
import gsap from 'gsap';
import styles from "./SpDragScroll.module.css";
//import { Container, Row, Col } from 'react-bootstrap';
//import { Modal, Button } from 'react-bootstrap';
//import { InertiaPlugin } from 'gsap/dist/InertiaPlugin'; //положено туда руками!!
import { Draggable } from 'gsap/Draggable';
//import  DetailsAndPopup  from "./DetailsAndPopup";
//import  DetailsAndPopup  from "../DetailsAndPopup/DetailsAndPopup";
//import  {Hamster}  from 'hamster';
//import DragContent1 from "./DragContent1";
import normalizeWheel from 'normalize-wheel';

export default class SpDragScroll extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    //this.myTween = null;
    
    this.state = {
      show:false
    }

    this.dragBox = null;
    this.dragZone = null;
    this.updateDimensions = this.updateDimensions.bind(this);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    
    this.hams = null;
  }

  componentDidMount() {
    //gsap.registerPlugin(Draggable, InertiaPlugin);
    gsap.registerPlugin(Draggable);
    Draggable.create(this.dragBox, {
      type: "x",
      dragClickables: true,
      allowContextMenu:true,
      bounds: this.dragZone,
      //inertia: true,
      /*onClick: function() {
        console.log("clicked");
      },*/
      onDragEnd: function() {
        //console.log("drag ended");
      }
    });
    this.initMouseScroll();
    
    gsap.to(this.dragBox, .1, { x: 1 })
    window.addEventListener("resize", this.updateDimensions);
    //console.log('this.props.refresh',this.props.refresh);
  }
  
  componentDidUpdate(prevProps) {
  // Популярный пример (не забудьте сравнить пропсы):
  //console.log('this.props.refresh',this.props.refresh);
  if (this.props.refresh !== prevProps.refresh) {
   // console.log('this.props.refresh',this.props.refresh);
    this.updateDimensions();
  }
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  
  updateDimensions(){
    //console.log('daggable upd');
    gsap.to(this.dragBox, .1, { x: 0 })
    Draggable.get(this.dragBox).update(true);
    //this.dragBox[0].update();
    console.log('h', this.dragBox.offsetWidth, this.dragZone.offsetWidth);
    if(this.dragBox.offsetWidth < this.dragZone.offsetWidth){
      //this.hams.unwheel();
      Draggable.get(this.dragBox).disable();
      
    }else{
      Draggable.get(this.dragBox).enable();
      //this.initMouseScroll();
    }
  }
  
  
  /*initMouseScroll() {
    var self = this;
    this.hams = window.Hamster(self.dragBox);
    this.hams.wheel(function(event, delta, deltaX, deltaY) {
      //console.log('whhh', deltaX);
      //event.preventDefault();
      self.animateSlides(delta*150, event); ///30);
      var del = delta;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        del = -deltaX;
      }
  
      self.animateSlides(del*150, event);
    });
  }*/
  
  initMouseScroll() {
    var self = this;
    //this.hams = window.Hamster(self.dragBox);
    //this.hams.wheel(function(event, delta, deltaX, deltaY) {
    self.dragBox.addEventListener("wheel",function(event){
      //console.log('whhh', deltaX);
      //console.log('delat', delta);
      
      //event.preventDefault();
      var normalized = normalizeWheel(event);
      var neventX = normalized.pixelX;
      //console.log('normalized.pixelY', normalized.pixelY);
      self.animateSlidesWheel(normalized.pixelY, event, 0);
      /*self.animateSlides(delta*150, event); ///30);
      var del = delta;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        del = -deltaX;
      }
  
      self.animateSlides(del*150, event);*/
      //self.animateSlides(delta*150, event); ///30);
    });
  }
  
  
  animateSlidesWheel(direction, event, time=0) {
    var direction = -direction;
    //console.log('dir', direction);
    if(this.dragBox.offsetWidth > this.dragZone.offsetWidth){
    var newX;
    var curX = Draggable.get(this.dragBox).x;
    var minX = Draggable.get(this.dragBox).minX;
    var maxX = Draggable.get(this.dragBox).maxX;
  
    if (direction < 0) {
      if (curX + direction > minX) {
        newX = curX + direction;
        event.preventDefault();
        //console.log('a');
      }
      else {
        newX = minX;
        //console.log('b');
      }
    }
    else {
      if (curX + direction < maxX) { //&& direction <0
        newX = curX + direction;
        event.preventDefault();
        //console.log('c');
      }
      else {
        newX = maxX;
        //console.log('d');
      }
    }
    //var newX = '+='+direction; //direction;
    //var t = 0;//time || .1;
    var t=time;
    //console.log('t',t);
    var dbox = this.dragBox;
    gsap.to(this.dragBox,  { duration:t, x: newX, onComplete:function(){Draggable.get(dbox).update()} });
    
    //console.log('newX', newX);
    Draggable.get(this.dragBox).update();
    }
  }
  
  
  /*animateSlides(direction, event, time) {
    if(this.dragBox.offsetWidth > this.dragZone.offsetWidth){
    var newX;
    var curX = Draggable.get(this.dragBox).x;
    var minX = Draggable.get(this.dragBox).minX;
    var maxX = Draggable.get(this.dragBox).maxX;
  
    if (direction < 0) {
      if (curX + direction > minX) {
        newX = curX + direction;
        event.preventDefault();
        console.log('a');
      }
      else {
        newX = minX;
        console.log('b');
      }
    }
    else {
      if (curX + direction < maxX) { //&& direction <0
        newX = curX + direction;
        event.preventDefault();
        console.log('c');
      }
      else {
        newX = maxX;
        console.log('d');
      }
    }
    var t = time || .1;
    //console.log('t',t);
    var dbox = this.dragBox;
    gsap.to(this.dragBox, t, { x: newX, onComplete:function(){Draggable.get(dbox).update()} });
    console.log('newX', newX);
    Draggable.get(this.dragBox).update();
    }
  } */
  
  moveLeft(e){
    Draggable.get(this.dragBox).update();
    //console.log('raggable.get(this.dragBox).x',Draggable.get(this.dragBox).x);
    //this.animateSlides(Draggable.get(this.dragBox).x + window.innerWidth, e, .5)
    this.animateSlidesWheel(window.innerWidth*.75, e, .5)
  }
  
  moveRight(e){
    Draggable.get(this.dragBox).update();
   // console.log('raggable.get(this.dragBox).x',Draggable.get(this.dragBox).x);
    //this.animateSlides(Draggable.get(this.dragBox).x - window.innerWidth, e , .5)
    this.animateSlidesWheel(- window.innerWidth*.75, e , .5)
  }
  
  handleShow(id,e){
    this.setState({show:true})
  }
  
  handleClose(){
    this.setState({show:false})
  }
  render() {
    return (
      <>
      {/*<div className="flynav">
        <button className="slick-arrow slick-next" onClick={(e) => this.moveRight(e)}></button>
        <button className="slick-arrow slick-prev" onClick={(e) => this.moveLeft(e)}></button>
      </div>*/}
      <div className={styles.dragZone} ref={div => this.dragZone = div} >
      <div className={styles.dragBox} ref={div => this.dragBox = div}>
        <div>{this.props.children}</div>
      </div>
    </div>
      <button className="slick-arrow slick-next" onClick={(e) => this.moveLeft(e)}></button>
      <button className="slick-arrow slick-prev" onClick={(e) => this.moveRight(e)}></button>
    </>
    );
  }
}