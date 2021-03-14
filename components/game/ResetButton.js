import styles from './ResetButton.module.css';

export default function ResetButton(props) {

    const clickHandler = () => {
        if(props.action) {
            props.action();
        }
    };

    return <button type={'button'} className={'button is-primary is-uppercase ' + styles.button} onClick={() => clickHandler()}>Reiniciar juego</button>;
}