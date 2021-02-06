// services
import QuestionsEngine from '../services/questions.js';


export default function Answer(props) {

    const key = props.id;
    const currentAnswer = props.answer;

    const question = new QuestionsEngine().get(key);

    return <div className={'columns is-centered'}>
        <div className={'column is-6'}>{question.question} - {currentAnswer}</div>
    </div>;
}