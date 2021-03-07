import Card from './Card.js';

export default function Deck(props) {

    const animals = props.items;

    return <div className={'columns is-multiline'}>
        {animals.map((animal, index) => {
            return <div className={'column is-3'} key={index}>
                <Card item={animal} />
            </div>;
        })}
    </div>;
}