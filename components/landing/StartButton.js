import styles from './StartButton.module.css';


export default function StartButton(props) {
    return <button type={'button'} className={'button is-primary is-uppercase ' + styles.button} onClick={() => {
        props.action && props.action()
    }}>Empezar</button>;
}