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
                <div className={'media-content'}>
                    <p className={'title is-4'}>{ animal.name }</p>
                    <p className={'subtitle is-6'}>{ animal.tipo }</p>
                </div>
            </div>  
            <div className={'content'}>
                { animal.description }
            </div>
        </div>
    </div>;
}