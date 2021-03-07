const animalCollection = [];

export default function Animals() {

    return {
        create(animal) {
            // generar el id del animal
            const id = animalCollection.length;
            animal.id = id;

            // guardar el animal en la colección
            animalCollection.push(animal);
        },

        find() { // this method will return all database items
            return animalCollection;
        },

        get(id) { // this method will return one item by id
            const filteredCollection = animalCollection.filter(i => i.id === id);
            
            return filteredCollection.length !== 0
                ? filteredCollection[0]
                : null;
        }
    };
};