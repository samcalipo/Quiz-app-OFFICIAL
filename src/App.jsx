import React, { useState, useEffect } from 'react'
import Intro from '../Components/Intro.jsx'
import Form from '../Components/Form.jsx'
import './App.css'
import he from 'he'

function App() {
  const [introIsShown, setIntroIsShown] = React.useState(true)
  const [questionList, setQuestionList] = React.useState([])
  const [answersSubmitted, setAnswersSubmitted] = React.useState(false)
  const [newGameRequested, setNewGameRequested] = React.useState(false)
  const [correctCount, setCorrectCount] = React.useState(0)
  function toggleIntro(){
      setIntroIsShown(false)
  }
  
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
  
  function handleChange(event){
      if( !answersSubmitted){ 
          const {name, value, type, checked, id} = event.target 
          setQuestionList(prev => {
              return prev.map((question, index) => {
                  
                  return name == index ? {
                  ...question, 
                  selected: value
              } : {...question}
              })
          }) 
          checkAnswer(value, name)
      }
  }
  function checkAnswer(selectedAns, qNum){
          setQuestionList(prev => {
              return prev.map((question, index) => {
                  
                  let bool = false;
                  let objPush = {}
                  if(index == qNum){
                      
                      bool = (selectedAns == question.correct) ? true : false; 
                      objPush = {
                          ...question,
                          isRight: bool  
                      }
                  } else {
                      objPush = {...question}
                  }
                  return objPush
              })
              
      })
  }
  function showResults(){
      
      if(!answersSubmitted){
          let count = 0;
          questionList.forEach(question => {
              if( question.correct == question.selected){
                  count++;
              }
              
          })
          setCorrectCount(count);
          setAnswersSubmitted(true)
      } else if(answersSubmitted){ //  game is reset
          setAnswersSubmitted(false)
          setNewGameRequested(prevState => !prevState)
      }
      

  }
  // in useEffect since i only want this code running when 
  // "newGameRequested" bool is flipped which will only happen when
  // new game button is clicked
  React.useEffect(() => {
     fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
                    
          let q = []
          data.results.forEach(question => {
              q.push({
                  question: he.decode(question.question),
                  correct: he.decode(question.correct_answer),
                  selected: null,
                  isRight: false,
                  answers: shuffleArray([he.decode(question.incorrect_answers[0]), he.decode(question.incorrect_answers[1]), he.decode(question.incorrect_answers[2]), he.decode(question.correct_answer)])
              })
          })
          setQuestionList(q)
          
      }) 
  }, [newGameRequested])
  
  return (
      <div className="app-container">
          <Intro 
              introIsShown={introIsShown}
              toggleIntro={toggleIntro}
          />
          <Form
              questions={questionList}
              introIsShown={introIsShown}
              handleChange={handleChange}
              showResults={showResults}
              answersSubmitted={answersSubmitted}
              correctCount={correctCount}
          />
      </div>
  )
}

export default App
