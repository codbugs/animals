const buttonStyle = {
    border: 'solid 1px #d633c5',
    color: '#d633c5',
    fontFamily: 'Oswald',
    fontSize: '16pt',
    fontWeight: '300',
    letterSpacing: '2px'
};

export default function Options(props) {
    const items = props.items;

    return <div className={'buttons'}>
        {items.map((i, index) => 
            <button key={index} type={'button'} className={'button'} style={buttonStyle} onClick={() => props.action(i)}>{i}</button>
        )}
    </div>;
}