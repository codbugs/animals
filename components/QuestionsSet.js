// services
import Engine from '../services/engine.js';


// components
import AnswersSet from './AnswersSet.js';
import Question from './Question.js';
import ShowAnimal from './ShowAnimal.js';


// react
import { useState } from 'react';


export default function QuestionsSet() {

    const game = new Engine();
    const [answers, setAnswers] = useState([]);
    const [resetQuestion, setResetQuestion] = useState(false);
    const [solution, setSolution] = useState(null);

    const processAnswer = answer => {
        game.save(answer.key, answer.answer);
        setAnswers([...answers, answer]);
        setResetQuestion(previosValue => !previosValue);
        if(game.hasBeenResolved()) {
            setSolution(game.get());
        }
    };

    return <>
        <AnswersSet answers={answers} />
        {null === solution &&
            <Question reset={resetQuestion} setAnswer={processAnswer} />
        }
        {null !== solution &&
            <ShowAnimal animal={solution}/>
        }
    </>;
}