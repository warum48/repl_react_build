import React, { useEffect, useState, useRef } from "react";
import "./SpTest.css";
import YandexShare from "components/YandexShare/YandexShare";
import {gaEvents} from '../SpGA/gaEvents';
import LinkGA from 'components/SpGA/LinkGA';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ProgressiveImage from "components/ProgressiveImage";

export default function SpTest() {
  
  /*------------MUI DEBUGGER-----------*/
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  //https://codesandbox.io/s/7c991?file=/demo.js:351-421
  /*-----------END MUI DEBUGGER--------*/
  
  //var tp = new Typograf({locale: ['ru', 'en-US']});
  const tp = useRef(null);
  tp.current = new Typograf({locale: ['ru', 'en-US']});
  
  useEffect(function () {
    //tp.current = new Typograf({locale: ['ru', 'en-US']});
  }, []);

  const [test] = useState({
    type: 'byRange', // byScore (какой score чаще всего повторился в ответах), byRange (сумма score попадает в интервал)
    range: {
      1: { lessEqual: -1000, moreEqual: 5 }, //resultNum: {lessEqual:, moreEqual:}
      2: { lessEqual: 6, moreEqual: 1000 }
    },
    questions: [
      {
        quest: "Идеальный выходной день – это…",
        answers: [
          {
            score: 4,
            text:
              "Cыграть партию в теннис, сходить на ланч с друзьями, а вечером посмотреть фильм в обнимку с дорогим человеком"
          },
          {
            score: 1,
            text:
              "Закрыть все долги по работе – чтобы в течение недели не выслушивать от начальника"
          },
          {
            score: 2,
            text:
              "Генеральная уборка (без неё просто нельзя), но потом обязательно спа – тайский массаж работает не хуже отпуска"
          },
          {
            score: 3,
            text:
              "Лежать и ничего не делать; службы доставки еды и хорошие сериалы – мои главные друзья"
          }
        ]
      },
      {
        quest: "Лучший напиток для по-настоящему хорошего дня?",
        answers: [
          { score: 3, text: "Выбираю только итальянскую воду Acqua Panna - люблю ее за мягкий вкус и бескомпромиссное качество" },
          { score: 2, text: "Чай или кофе – они помогают выдержать бешеный ритм жизни" },
          { score: 1, text: "Меня очень бодрят сладкие газировки" },
        ]
      },
      {
        quest: "Для вас важно находить время для себя?",
        answers: [
          { score: 2, text: "Конечно" },
          { score: 1, text: "Нет, сразу начинаю переживать: как там все без меня?" },
        ]
      },
      
      {
        quest: "Отпуск без телефона – это реальность?",
        answers: [
          { score: 1, text: "Да вы что, даже и не мечтаю о таком!" },
          { score: 3, text: "Принципиально выключаю телефон на все две недели – отпуск есть отпуск" },
          { score: 2, text: "Проверяю почту вечером, но не более" },
        ]
      }/**/
    ],

    results: [
      {
        head: 'Стопроцентный гедонист',
        text: 'Вы точно умеете наслаждаться жизнью и брать от неё все! Если вода – то только Acqua Panna, если отдых – то только на лучших курортах. <br/>Так держать!'
      },
      {
        head: 'Есть над чем работать!',
        text: 'Отставить скуку и занудство: научитесь каждый день проживать максимально насыщенно. Начните со смены банальных привычек. Например, начинайте день со стакана воды Acqua Panna и отправляйтесь на утреннюю йогу: пусть дела подождут!'
      },
      {
        head: 'Меняем отношение к жизни',
        text: 'Вам не кажется, что вы забыли о том, что жизнь – это не только бесконечная работа и дедлайны? Включите здоровый эгоизм, оглянитесь вокруг и вспомните о том, что главный человек в вашей жизни – вы сам. А вода Acqua Panna поможет настроиться на нужный лад: к лучшему быстро привыкаешь.'
      },
    ]
  });

  const [status, setStatus] = useState('intro'); //answered //waiting // result
  const [questnum, setQuestnum] = useState(0);
  const [answers, addAnswer] = useState([]);
  const [resultnum, setResultnum] = useState(0);
  
  const [waitquestnum, setWaitQuestnum] = useState(0);
  const [waitanswers, setWaitAnswers] = useState(null);
  const [curAnswIndex, setCurAnswIndex] = useState(-1);
  const [animationClassIsOn, setAnimationClassIsOn] = useState(true);
  
  const states = ['intro','answered','waiting','result'];

  function handleAnswerClick(answ, e) {
    setQuestnum(questnum => (questnum < test.questions.length - 1) ? questnum + 1 : questnum);
    addAnswer(answers => (answers.length < test.questions.length) ? [...answers, answ.score] : answers);
  }
  
  function handleAnswerClickWait(answ, index, e) {
    //console.log('index', index);
   // if(status == 'waiting'){
    //setWaitQuestnum(questnum => (questnum < test.questions.length - 1) ? questnum + 1 : questnum);
    //setWaitAnswers(answers => (answers.length < test.questions.length) ? [...answers, answ.score] : answers);
    setWaitAnswers(answ);
    setCurAnswIndex(index);
    setStatus('answered');
   // }
  }
  
  function handleAnswerClickAfterWait(answ, e) {
    //setQuestnum(waitquestnum);
    //addAnswer(waitanswers);
    if(status == 'answered'){
      
      var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: 'SpTest_questnum_'+(questnum+1), eventLabel: 'Answ_'+(curAnswIndex+1)};
      gaEvents.sendEvent(event);
      
    setQuestnum(questnum => (questnum < test.questions.length - 1) ? questnum + 1 : questnum);
    addAnswer(answers => (answers.length < test.questions.length) ? [...answers, waitanswers.score] : answers);
    setStatus('waiting');
    setCurAnswIndex(-1);
    console.log('set-1');
    setAnimationClassIsOn(true);
    }
  }
  
  

  useEffect(function checkShowResult() {
    if (answers.length === test.questions.length) {

      var results = {
        max: { score: 0, count: 0 }, sameAnswer: {},
        scoreSum: 0
      };
      //console.log('answers', answers);
      answers.forEach(function (score, questNum) {
        score = parseInt(score, 10) || 0;
        results.scoreSum += score;
  
        // Сколько раз повторился
        results.sameAnswer[score] = results.sameAnswer[score] || 0; //инитим если нет
        results.sameAnswer[score]++;
  
        if (results.sameAnswer[score] > results.max.count) {
          results.max.count = results.sameAnswer[score];
          results.max.score = score; // Больше всего повторений
        }
        
        //console.log('results.scoreSum', results.scoreSum);
      });
  
      /*if (test.type === 'byScore') {
        setResultnum(results.max.score);
        console.log('results.max.score', results.max.score);
      } else if (test.type === 'byRange') {
          Object.values(test.range).forEach(function(range, resultNum){
          if(range.lessEqual && range.moreEqual && results.scoreSum >= range.lessEqual && results.scoreSum <= range.moreEqual){
              setResultnum(resultNum);
              console.log('resultNum', resultNum);
          }
      });
      }*/
      console.log('results.scoreSum ' + results.scoreSum )
      
      if(results.scoreSum >= 10){
        console.log(1);
        setResultnum(1);
      }else if (results.scoreSum >= 6 && results.scoreSum <= 9 ){
        setResultnum(2);
        console.log(2)
      }else if (results.scoreSum <=5 ){
        setResultnum(3);
        console.log(3);
      }
      
      
  
      setStatus("result");
  
      /*var event = {
        hitType: 'event', eventCategory: 'ImplantTest:' + window.location.pathname,
        eventAction: 'TestResult' + $scope.state.resultNum, eventLabel: 'Результат' + $scope.state.resultNum
      };*/
      //spGA.send(event);
    //},[])
    
    }
  }, [answers,  test.questions, test.type, test.range])  //eslint wanted test dependencies
  
  useEffect(() =>{
    if(resultnum != 0){
    var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: 'SpTest_result_'+resultnum, eventLabel: 'TestResult'};
      gaEvents.sendEvent(event);
    }
  }, [resultnum])
  
  useEffect(() =>{
    if(status == "waiting" && questnum == 0){
    var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: 'SpTest_Start', eventLabel: 'Click'};
      gaEvents.sendEvent(event);
    }
    
    if (status == "answered") {
      handleAnswerClickAfterWait(); // if we don't have NEXT BUTTON
    }
    
    if(status == "result"){
      document.body.classList.add('result_show');
  }else{
  document.body.classList.remove('result_show');
    }
  }, [status])
  
  function restart(e){
    e.preventDefault();

    setStatus("intro");
    setResultnum(0);
    addAnswer([]);
    setQuestnum(0);
    
    var event = {hitType: 'event', eventCategory: 'SpEvent', eventAction: 'SpTest_Restart', eventLabel: 'Click'};
      gaEvents.sendEvent(event);
  }

  return (
    <>
    
    {/*<Box sx={{ minWidth: 120 , maxWidth:200, position:'fixed', bottom:30, left:30, marginTop:`10px`, zIndex:1000}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'intro'}>intro</MenuItem>
          <MenuItem value={'waiting'}>waiting</MenuItem>
          <MenuItem value={'result'}>result</MenuItem>
        </Select>
      </FormControl>
    </Box>*/}
    
    <div className="typical-test">
      {status === "intro" && <div className="hello_page box2col">
        <div className="header">
          <a href="https://bazaar.ru" target="_blank" className="logo_baz"><img src='./assets/img/logo_baz.png' className="img-fluid" /></a>
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="logo_sp"><img src='./assets/img/logo_sp.png' className="img-fluid" /></a>
        </div>
        <div className="boxleft">
          {/*<img src='./assets/img/bg1.jpg' className="img-fluid" />*/}
          <ProgressiveImage placeholder={'./assets/img/bg1_pre.jpg'} src={'./assets/img/bg1.jpg'} />
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="linkBottle"></a>
        </div>
        <div className="content">
          <div className="wrap">
            <div className="highlights">Наслаждаться жизнью, как итальянцы: можно&nbsp;ли назвать вас гедонистом?</div>
            <p className="prehead">Вместе с&nbsp;Acqua Panna мы&nbsp;решили выяснить, кто из&nbsp;наших читателей умеет по-настоящему наслаждаться жизнью. Условие одно: отвечать честно.</p>
            
            <button className="btn_style" onClick={() => setStatus("waiting")}>Пройти тест</button>
            
          </div>
        </div>
      </div>}
      {(status === "waiting" || status === "answered") && <div className="test box2col">
        <div className="header">
          <a href="https://bazaar.ru" target="_blank" className="logo_baz"><img src='./assets/img/logo_baz.png' className="img-fluid" /></a>
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="logo_sp"><img src='./assets/img/logo_sp.png' className="img-fluid" /></a>
        </div>
        <div className="boxleft">
          {/*<img src={'./assets/img/bg'+(questnum+2)+'.jpg'} className="img-fluid" />*/}
          <ProgressiveImage placeholder={'./assets/img/bg'+(questnum+2)+'_pre.jpg'} src={'./assets/img/bg'+(questnum+2)+'.jpg'} />
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="linkBottle"></a>
        </div>
        <div className="content">
          <div className="wrap">
            
            <div className="quest_box">
              {/* <div className="quest_count">Вопрос {questnum + 1} / {test.questions.length} </div> */}
              <div className={`quest_head ${animationClassIsOn ? 'fadeIn_0' : ''}`} dangerouslySetInnerHTML={{__html: tp.current.execute(test.questions[questnum].quest)}}></div>
  
              <div className="answ_box  animated">
                {test.questions[questnum].answers.map((answer, index) =>
                  <div className={`answ_txt ${curAnswIndex == index ? "active" :""} ${animationClassIsOn ? 'fadeIn_05' : ''} `}  key={index} onClick={(e) => handleAnswerClickWait(answer, index, e)} onAnimationEnd={() => setAnimationClassIsOn(false)}>
                    {/*<span className="num">{index.toString()}</span>*/}
                    <span className="txt"  dangerouslySetInnerHTML={{__html: tp.current.execute(answer.text)}}></span>
                  </div>
                )}
              </div>
  
              {/*<div className="answ_btn_box" onClick={handleAnswerClickAfterWait}>
                <div className={`btn_style btn_next  ${status=="waiting" ? "btn_disable" : ""}`}>следующий вопрос</div>
              </div>*/}
              <div className="quest_count">{questnum + 1}/{test.questions.length}</div>
              <div className="stepbox">
                {/*<div className="step active  done "></div>
                <div className="step active "></div>
                <div className="step  "></div>*/}
                {test.questions.map((q, index) =>
                  <div key={'i'+index} className={`step ${questnum >= index ? 'active' : ''}  ${questnum > index ? 'done' : ''} `}></div>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>}

      
      {status === "result" && <div className={"result box2col res" + resultnum}>
        
        <div className="header">
          <a href="https://bazaar.ru" target="_blank" className="logo_baz"><img src='./assets/img/logo_baz_w.png' className="img-fluid" /></a>
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="logo_sp"><img src='./assets/img/logo_sp_w.png' className="img-fluid" /></a>
        </div>
        <div className="boxleft">
          {/*<img src={'./assets/img/bg6.jpg'} className="img-fluid" />*/}
          <ProgressiveImage placeholder={'./assets/img/bg6_pre.jpg'} src={'./assets/img/bg6.jpg'} />
          <a href="https://bit.ly/3vnzEw2" target="_blank" className="linkBottle"></a>
        </div>
        <div className={"result_box content"}>
          
          <div className="wrap">
            <div className="res_head" dangerouslySetInnerHTML={{__html: tp.current.execute(test.results[resultnum-1].head) || ''}}></div>
            <div className="res_more" dangerouslySetInnerHTML={{__html: tp.current.execute(test.results[resultnum-1].text) || ''}}></div>
            
            <div className="btn_box">
              <div className="result_btn_share">
                <div className="smallhead">поделиться результатом</div>
                <YandexShare caption="поделиться результатом" place='test'/>
              </div>
              <div className="result_btn_repeat">
                <div className="smallhead">пройти ещё раз</div>
                <button className="btn_repeat" onClick={(e) => restart(e)}><img src='./assets/img/ico_refr.png' className="img-fluid" /></button>
              </div>
              
            </div>
          </div>
          
          
        </div>
        
        
      </div>}
    </div>
    </>
  );
}


