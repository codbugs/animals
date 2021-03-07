// components
import Answer from './Answer.js';


export default function AnswersSet(props) {

    const answers = props.answers;

    return <>
        {answers.map(a => {
            return <Answer key={a.key} id={a.key} answer={a.answer} />;
        })}
    </>;
}