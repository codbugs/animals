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
            <div className={'columns is-centered'}>
                <div className={'column is-8'}>
                    <div className={'container has-text-centered'}>
                        <div className={'field is-horizontal is-grouped-centered'}>
                            <label className={'label'}>{question.question}</label>
                            {question.answers.map((answer, index) => {
                                return <div className={'control'}>
                                        <button key={index} type={'button'} className={'button'} onClick={() => answerButtonClick(answer)}>{answer}</button>
                                    </div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>}
    </>;
}