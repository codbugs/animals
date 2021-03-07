import styles from './StartButton.module.css';


export default function StartButton(props) {

    const clickHandler = () => {
        if(props.action) {
            props.action();
        }
    };

    return <button type={'button'} className={'button is-primary is-uppercase ' + styles.button} onClick={() => clickHandler()}>Empezar</button>;
}