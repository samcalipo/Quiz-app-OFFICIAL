import React from 'react'

export default function Intro(props){
    const styles = {
        display: props.introIsShown? "flex" : "none" 
    }
    
    return (
        <section className="intro-container" style={styles}>
            <h1 className="intro--h1">Quizzical</h1>
            <h2 className="intro--h2">Let the trivia begin!!</h2>
            <button className="intro--btn" onClick={props.toggleIntro}>Start Quiz</button>
        </section>
    )
}