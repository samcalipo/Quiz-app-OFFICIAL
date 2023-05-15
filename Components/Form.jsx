import React from 'react'


export default function Form(props){
    const styles = {
        display: props.introIsShown ? "none": "flex"
    } 
    
    function renderStyles(selected, option, correctAns){
        if(!props.answersSubmitted){
            return `${selected == option ? "checked": "unchecked"}`
        }
        else{
            if(option == correctAns){
                
                return `isRight`
            }
            else if(selected != option){
                
                return 'didntSelect'
            }
            else if( selected != correctAns ){
                
                return 'isWrong'
            } 
            
        }
    }
    function renderFinalScoreCount(){
        return <p style={{opacity: props.answersSubmitted ? "100%" : "0"}}>
            You scored {props.correctCount}/5 correct answers</p>
    }
    const questionElements = props.questions.map((q, index) => {
        return (
            <ul className="form--question">
                <legend className="form--question_title">{q.question}</legend>
                <div className="form--options">
                    <li className={`options ${renderStyles(q.selected, q.answers[0], q.correct)}`}>
                        <input 
                            type="radio"
                            id={q.answers[0]}
                            name={index}
                            value={q.answers[0]}
                            onChange={() => props.handleChange(event)}
                        />
                        <label htmlFor={q.answers[0]}>{q.answers[0]}</label> 
                    </li>
                    <li className={`options ${renderStyles(q.selected, q.answers[1], q.correct)}`}>
                        <input 
                            type="radio"
                            id={q.answers[1]}
                            name={index}
                            value={q.answers[1]}
                            onChange={() => props.handleChange(event)}
                        />
                        <label htmlFor={q.answers[1]}>{q.answers[1]}</label> 
                    </li>
                    <li className={`options ${renderStyles(q.selected, q.answers[2], q.correct)}`}>
                        <input 
                            type="radio"
                            id={q.answers[2]}
                            name={index}
                            value={q.answers[2]}
                            onChange={() => props.handleChange(event)}
                        />
                        <label htmlFor={q.answers[2]}>{q.answers[2]}</label> 
                    </li>
                    <li className={`options ${renderStyles(q.selected, q.answers[3], q.correct)}`}>
                        <input 
                            type="radio"
                            id={q.answers[3]}
                            name={index}
                            value={q.answers[3]}
                            onChange={() => props.handleChange(event)}
                        />
                        <label htmlFor={q.answers[3]}>{q.answers[3]}</label> 
                    </li>
                </div>
            </ul>
        )
    })
    
    return (
        <div style={styles} className="form-container" > 
            {questionElements}
            <div className="footer">
                {renderFinalScoreCount()}
                <button onClick={props.showResults}>
                    {!props.answersSubmitted? "Check Answers" : "Play again!"}
                </button>
            </div>
            
        </div>
        )
}