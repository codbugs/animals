// services
import QuestionsEngine from '../services/questions.js';


export default function Answer(props) {

    const key = props.id;
    const currentAnswer = props.answer;

    const question = new QuestionsEngine().get(key);

    return (
        <div className={'box'}>
            <div className={'columns is-vcentered'}>
                <div className={'column is-6 has-text-right'}>
                    <p className={'has-text-grey'}>{question.question}</p>
                </div>
                <div className={'column is-6'}>
                    <div className={'buttons'}>
                        {question.answers.map((answer, index) => {
                            const isThisAnswerTheCurrentAnswer = answer === currentAnswer;

                            return (isThisAnswerTheCurrentAnswer &&
                                <button key={index} type={'button'} className={'button is-primary is-light'}>{answer}</button>);
                        })}
                    </div>
                </div>
            </div>
        </div>);
}