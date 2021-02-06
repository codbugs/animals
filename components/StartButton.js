export default function StartButton(props) {
    return <button type={'button'} className={'button is-primary'} onClick={() => props.launch()}>Empezar</button>;
}