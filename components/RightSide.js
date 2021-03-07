import Deck from './deck/Deck.js';

export default function RightSide(props) {
    return <div className={'section'}>
        <Deck items={props.items} />
    </div>;
}