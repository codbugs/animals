export default function CardImage(props) {
    const url = props.url;

    return <figure className={'image is-64x64'}>
        <img src={url} />
    </figure>;
}