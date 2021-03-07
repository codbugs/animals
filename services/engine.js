let keysSelected = [
    // { key: 'type', answer: 'Mamifero' }
];

export default function Engine(animalsService, questionsService) {

    let keysIgnored = ['id', 'name', 'imageUrl'];

    let animals = [...animalsService.find()];
    let questions = questionsService;
    
    return {
        hasBeenResolved() {
            return 1 === animals.length;
        },

        get() {
            return animals[0];
        },

        next() {
            // collect all properties from all animals without repetition
            let allProperties = new Set();
            animals.forEach(animal => {
                const animalProperties = Object.keys(animal);
                animalProperties.forEach(prop => {
                    allProperties.add(prop);
                });
            });

            // remove ignored keys from the collection
            keysIgnored.forEach(key => {
                allProperties.delete(key);
            });
            
            // remove previously selected keys from the collection
            keysSelected.forEach(key => {
                allProperties.delete(key.key);
            });

            // choose one key randomly
            const propertyIndex = Math.floor(Math.random() * (allProperties.size-1));
            let key = [...allProperties][propertyIndex];
            keysSelected.push({ key: key });

            const { question, answers } = questions.get(key);

            return {
                key: key,
                question: question,
                answers: answers
            };
        },

        reset() {
            keysSelected = [];
            animals = [...animalsService.find()];
        },

        save(questionKey, answer) {
            // guardar la respuesta dada
            const keys = keysSelected.filter(i => i.key === questionKey);
            if(keys.length === 0) {
                throw new Error(`key ${questionKey} has not been selected`);
            }
            
            keys[0].answer = answer;

            // reducir el número de animales que tenemos en base a la respuesta
            const q = questions.get(questionKey);
            animals = animals.filter(animal => q.filter(animal, answer));
        }
    };
}