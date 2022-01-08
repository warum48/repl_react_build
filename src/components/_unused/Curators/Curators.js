import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useToggle } from "components/Utils";
import LinkGA from 'components/SpGA/LinkGA';
import {gaEvents} from 'components/SpGA/gaEvents';


const Curators = (props) => {
 
 //const [menuIsOn, toggleMenuIsOn] = useToggle();
 
 const curatorsAr = [
     {
         name:'Путылин',
         sname:'Дмитрий',
         who:"Фитнес директор <nobr>Men's</nobr> Health, лидер проекта",
         weight:'',
         fat:'',
         muscle:''
     },
     {
         name:'Юрпалова',
         sname:'Анастасия',
         who:'Куратор марафона, нутрициолог',
         weight:'',
         fat:'',
         muscle:''
     },
     {
         name:'Богданов',
         sname:'Антон',
         who:'Тренер-инструктор силовых тренировок',
         weight:'',
         fat:'',
         muscle:''
     },
     {
         name:'Романенкова',
         sname:'Юлия',
         who:"Врач эндокринолог, диетолог",
         weight:'',
         fat:'',
         muscle:''
     },
     {
         name:'Ирхужина',
         sname:'Ванда',
         who:'Методист учебной программы',
         weight:'',
         fat:'',
         muscle:''
     }
     
     ]

  return (
    
    
        <div className='curators' >

                { curatorsAr.map((part, index) =>
                    <div key={index} className={"box_curator item"+(index+1)}>
                      <img src={"./assets/img/team_peop_"+(index+1)+".jpg"}/>
                      <div className="box_curator-name" >{part.name}</div>
                      <div className="box_curator-sname">{part.sname}</div>
                      <div className="box_curator-who"  dangerouslySetInnerHTML={{__html: part.who}}></div>
                    </div>
                )}
          
          </div>
  )
}

export default Curators 

//{ props.where == 'main_page' &&
// }

