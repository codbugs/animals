export default function ShowAnimal(props) {

    const animal = props.animal;
    const isActive = props.active;

    return <div className={'modal' + (isActive ? ' is-active' : '')}>
        <div className={'modal-background'}></div>
        <div className={'modal-content'}>
            <h1>Tu animal es {null !== animal ? animal.name : ''}</h1>
        </div>
        <button className={'modal-close is-large'} aria-label={'close'} onClick={() => props.reset && props.reset()}></button>
    </div>;
}