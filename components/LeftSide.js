import { useState } from 'react';

import Landing from './landing/Landing.js';
import Game from './game/Game.js';

export default function LeftSide(props) {

    const game = props.game;
    const [hasGameStarted, startGame] = useState(false);

    return <div className={'section'}>
        {hasGameStarted 
            ? <Game engine={game} /> 
            : <Landing start={() => {
                startGame(true); 
            }}/>
        }
    </div>;
}