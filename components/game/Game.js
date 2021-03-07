import { useState } from 'react';

// components
import Questions from './Questions.js';
import Solution from './Solution.js';
import Title from './Title.js';


// styles imports
import styles from './Game.module.css';


export default function Game(props) {

    const engine = props.engine;
    const [solution, setSolution] = useState(null);
    const [isSolutionActive, setIsSolutionActive] = useState(false);

    return <div className={'colums is-multiline ' + styles.columns}>
        <div className={'column is-full'}>
            <Title />
            <Questions engine={engine} onSolve={(animal) => {
                setSolution(animal);
                setIsSolutionActive(true);
                // engine.reset();
            }}/>
            <Solution url={solution && solution.imageUrl} name={solution && solution.name} isActive={isSolutionActive} onClosing={() => {
                setIsSolutionActive(false);
            }} />
        </div>
    </div>;
}