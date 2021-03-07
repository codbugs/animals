// services
import Engine from '../services/engine.js';

// components
import ThinkingQuestion from './ThinkingQuestion.js';

// react
import { useEffect, useState } from 'react';


export default function Question(props) {

    const game = new Engine();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(null);
        setQuestion(game.next());
    }, [props.reset]);

    const answerButtonClick = answer => {
        props.setAnswer({
            key: question.key,
            answer: answer
        })
    };

    return <>
        {null === question && <ThinkingQuestion />}
        {null !== question &&
            <div className={'columns is-multiline'}>
                <div className={'column is-12 has-text-centered has-text-weight-bold'}>
                    <p>{question.question}</p>
                </div>
                <div className={'column is-12'}>
                    <div className={'buttons is-centered'}>
                        {question.answers.map((answer, index) => {
                            return <button key={index} type={'button'} className={'button is-primary is-outlined'} onClick={() => answerButtonClick(answer)}>{answer}</button>;
                        })}
                    </div>
                </div>
            </div>}
    </>;
}