export default function Solution(params) {

    const animalImageUrl = params.url || '';
    const animalName = params.name || '';
    const isActive = params.isActive || false;
    const handleCloseModal = params.onClosing;

    return <div className={'modal' + (isActive ? ' is-active' : '')}>
        <div className={'modal-background'}></div>
        <div className={'modal-content'}>
            <div className={'section px-4'} style={{
                backgroundAttachment: 'fixed',
                backgroundColor: 'white',
                backgroundImage: 'url(/assets/solution_background.png)',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                border: '5px solid gray',
                borderRadius: '20px'
            }}>
                <div className={'columns is-multiline'}>
                    <div className={'column is-full has-text-centered'}>
                        <div className={'px-6'} style={{
                            color: 'black',
                            fontFamily: 'Oswald',
                            fontSize: '34pt',
                            fontWeight: '700',
                            letterSpacing: '2pt'
                        }}>El animal que estás pensando es...</div>
                    </div>
                    <div className={'column is-full has-text-centered'}>
                        <figure className={'image is-128x128'}>
                            <img src={animalImageUrl} />
                        </figure>
                    </div>
                    <div className={'column is-full has-text-centered'}>
                        <div className={'is-uppercase px-6'} style={{
                            color: '#d633c5',
                            fontFamily: 'Oswald',
                            fontSize: '40pt',
                            fontWeight: '700',
                            letterSpacing: '2pt'
                        }}>{animalName}</div>
                    </div>
                </div>
            </div>
        </div>
        <button className={'modal-close is-large" aria-label="close'} onClick={() => handleCloseModal && handleCloseModal()}></button>
    </div>;
}