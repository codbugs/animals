const buttonStyle = {
    fontFamily: 'Oswald',
    fontSize: '20pt',
    fontWeight: '700',
};


export default function StartButton(props) {
    return <button type={'button'} className={'button is-primary is-uppercase'} style={buttonStyle} onClick={() => {
        props.action && props.action()
    }}>Empezar</button>;
}