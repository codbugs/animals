export default function CardTitle(props) {
    const text = props.text;

    return <div className={'is-size-5 has-text-centered'} style={{
        fontFamily: 'Oswald',
        fontSize: '15pt',
        fontWeight: '300',
    }}>{text}</div>;
}