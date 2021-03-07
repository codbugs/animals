export default function Card(props) {

    const animal = props.animal;

    return <div className={'card'}>
        <div className={'card-image'}>
            <figure className={'image is-4by3'}>
                <img src={ animal.imageUrl } />
            </figure>
        </div>
        <div className={'card-content'}>
            <div className={'media'}>
                <div className={'media-content has-text-centered'}>
                    <p className={'is-5'}>{ animal.name }</p>
                </div>
            </div>
        </div>
    </div>;
}