import { useEffect, useState } from 'react';

import ActiveQuestion from './ActiveQuestion.js';
import Question from './Question.js';
import ResetButton from './ResetButton.js';

export default function Questions(props) {
    
    const engine = props.engine;
    const [questionsAnswered, setQuestionsAnswered] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);

    useEffect(() => {
        setQuestionsAnswered([]);
        setActiveQuestion(engine.next());
    }, [engine])

    return <>
        {questionsAnswered.map((q, index) => <Question key={index} question={q} />)}

        {null !== activeQuestion && <ActiveQuestion question={activeQuestion} provideAnswer={(value) => {
            try {
                // tengo que guardar la respuesta dada
                engine.save(activeQuestion.key, value);

                // tengo que comprobar si sólo queda un animal
                const hasBeenResolved = engine.hasBeenResolved();

                if(hasBeenResolved) {
                    // mostrar la respuesta
                    const solution = engine.get();
                    
                    if(null !== props.onSolve) {
                        props.onSolve(solution);
                        setIsResetButtonVisible(true);
                    }
                    return;
                }
                
                
                // tengo que actualizar la visualización de las respuestas
                setQuestionsAnswered([...questionsAnswered, {
                    text: activeQuestion.question,
                    value: value
                }]);

                // tengo que asignar la nueva pregunta a la pregunta activa
                const nextQuestion = engine.next();
                setActiveQuestion(nextQuestion);

            } catch(err) {
                console.error('>>> [ActiveQuestion] provideAnswer', err);
            }
        }}/>}

        {isResetButtonVisible && <ResetButton action={() => {
            setIsResetButtonVisible(false);
            engine.reset();
            setQuestionsAnswered([]);
            setActiveQuestion(engine.next());
        }} />}
    </>;
}