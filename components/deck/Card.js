import CardImage from './CardImage.js';
import CardTitle from './CardTitle.js';

let style = {
    backgroundColor: 'white',
    border: '5px solid gray',
    borderRadius: '20px',
    padding: '15px 0px'
};

export default function Card(props) {
    const animal = props.item;

    return <div className={'is-flex is-flex-direction-column is-align-items-center'} style={style}>
        <CardImage url={animal.imageUrl}/>
        <CardTitle text={animal.name} />
    </div>;
}