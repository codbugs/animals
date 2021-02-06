import Database from './data.js';
import QuestionsEngine from './questions.js';

let keysSelected = [
    // { key: 'type', answer: 'Mamifero' }
];

// TODO: Refactorizar para no tener los animales en global
let animals = Database().find();

export default function Engine() {

    let questions = new QuestionsEngine();

    let keysIgnored = ['id', 'name'];
    
    return {
        hasBeenResolved() {
            return 1 === animals.length;
        },

        get() {
            return animals[0];
        },

        next() {
            // elegir un animal aleatorio de la colección
            const animalsLength = animals.length;
            const animalIndex = Math.floor(Math.random() * (animalsLength-1));
            const animalChoosen = animals[animalIndex];

            let key = '';
            let hasKeyBeingSelected = true;
            let doesKeyBelongToIgnoredKeys = true;

            // TODO: Revisar proceso para no caer en un bucle infinito de elección de propiedades
            while(hasKeyBeingSelected || doesKeyBelongToIgnoredKeys)  {
                // elegir una propiedad de forma aleatoria
                const properties = Object.keys(animalChoosen);
                const propertyIndex = Math.floor(Math.random() * (properties.length-1));
                key = properties[propertyIndex];

                // comprobamos si ya la hemos elegido anteriormente para repetir proceso
                hasKeyBeingSelected = keysSelected.filter(i => i.key === key).length > 0;
                
                // comprobamos si la key debe ser ignorada
                doesKeyBelongToIgnoredKeys = keysIgnored.includes(key);
            }

            keysSelected.push({
                key: key
            });
            
            
            // consultar la pregunta en base a la propiedad
            const { question, answers } = questions.get(key);

            // devolver la pregunta y los posibles valores
            return {
                key: key,
                question: question,
                answers: answers
            };
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