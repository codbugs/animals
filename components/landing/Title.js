import styles from './Title.module.css';

export default function Title() {
    return <h1 className={'title is-uppercase ' + styles.title}>Animals</h1>;
}