import { useEffect, useState } from 'react';

import ActiveQuestion from './ActiveQuestion.js';
import Question from './Question.js';

export default function Questions(props) {
    
    const engine = props.engine;
    const [questionsAnswered, setQuestionsAnswered] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);

    useEffect(() => {
        setActiveQuestion(engine.next());
    }, []);

    useEffect(() => {
        setQuestionsAnswered([]);
        setActiveQuestion(engine.next());
    }, [engine])

    return <>
        {questionsAnswered.map((q, index) => <Question key={index} question={q} />)}

        {null !== activeQuestion && <ActiveQuestion question={activeQuestion} provideAnswer={(value) => {
            // tengo que guardar la respuesta dada
            engine.save(activeQuestion.key, value);

            // tengo que comprobar si sólo queda un animal
            if(engine.hasBeenResolved()) {
                // mostrar la respuesta
                const solution = engine.get();
                
                if(null !== props.solve) {
                    props.solve(solution);
                }
                return;
            }
            
            // tengo que actualizar la visualización de las respuestas
            setQuestionsAnswered([...questionsAnswered, {
                text: activeQuestion.question,
                value: value
            }]);

            // tengo que obtener la nueva pregunta
            // tengo que asignar la nueva pregunta a la pregunta activa
            setActiveQuestion(engine.next());
        }}/>}
    </>;
}