export default function StartButton(props) {
    return <button type={'button'} className={'button is-primary is-large'} onClick={() => props.launch()}>Empezar</button>;
}