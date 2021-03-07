const questionStyle = {
    fontFamily: 'Oswald',
    fontSize: '18pt',
    fontWeight: '300',
    letterSpacing: '2px'
};

const answerStyle = {
    color: '#d633c5',
    ...questionStyle
};

export default function Question(props) {

    return <div className={'columns is-vcentered pb-4'}>
        <div className={'pr-2'}>
            <figure className={'image is-16x16'}>
                <img src={'/assets/grey_ball.png'} />
            </figure>
        </div>
        <div className={'pr-4'} style={questionStyle}>{props.question.text}</div>
        <div style={answerStyle}>{props.question.value}</div>
    </div>;
}