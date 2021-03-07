let questions = [
    // { key: '', question: '', answers: [] }
];

export default function QuestionsEngine() {

    // questions = [];

    return {
        create(question) {
            questions.push(question);
        },

        get(key) {
            const filteredQuestions = questions.filter(q => q.key === key);
            
            if(filteredQuestions.length === 0) {
                throw new Error(`There are more than 1 item with key ${key}`);
            }

            return filteredQuestions[0];
        }
    };
}