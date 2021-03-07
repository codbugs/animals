import Options from './Options.js';


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


export default function ActiveQuestion(props) {
    const question = props.question;

    return <div className={'columns is-vcentered pb-4'}>
        <div className={'pr-2'}>
            <figure className={'image is-16x16'}>
                <img src={'/assets/pink_ball.png'} />
            </figure>
         </div>
         <div className={'pr-4'} style={questionStyle}>{question.question}</div>
        <Options items={question.answers} action={(value) => props.provideAnswer(value)}/>
    </div>;
}