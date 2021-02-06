const animalCollection = [
    // { id: 1, name: 'Perro', type: 'Mamífero', imageUrl: './assets/perro.jpg', description: 'Maecenas aliquam dictum odio, accumsan pulvinar enim ultrices nec. Etiam vitae accumsan massa. In quis tortor eget ex vehicula luctus. Aliquam sollicitudin lacus a nibh cursus, in finibus nibh accumsan. Curabitur ut rhoncus purus. In eu scelerisque dolor, in aliquet felis. Nunc tempor posuere est non consequat.' },
    
    // { id: 2, name: 'Gato', type: 'Mamífero', imageUrl: './assets/gato.jpg', description: 'Pellentesque pellentesque consequat tortor, non semper augue tincidunt et. Mauris fringilla cursus massa, mattis mollis sapien suscipit at. ' },
    
    // { id: 3, name: 'Vaca', type: 'Mamífero', imageUrl: './assets/vaca.jpg', description: 'Nulla pretium augue eget velit ornare fringilla quis et odio. Maecenas in congue massa, ac feugiat nibh. Donec eleifend pharetra erat nec fermentum.' },
    
    // { id: 4, name: 'Burro', type: 'Mamífero', imageUrl: './assets/burro.jpg', description: 'Aliquam vulputate nunc hendrerit, vehicula arcu eu, posuere ligula. Pellentesque eros turpis, congue a mollis eget, molestie vel eros. Nullam id diam sed nisi condimentum lobortis. Nunc dictum venenatis nisi, ac placerat tellus pretium at.' },
    
    // { id: 5, name: 'Pájaro', type: 'Ave', imageUrl: './assets/pajaro.jpg', description: 'Vestibulum finibus massa aliquet libero varius blandit.' },
    
    // { id: 6, name: 'Ratón', type: 'Mamífero', imageUrl: './assets/raton.jpg', description: 'Ut accumsan varius metus, ut tincidunt odio porttitor in. Nullam ac cursus ipsum, nec ornare neque. Maecenas non risus vitae tellus venenatis condimentum.' },
];

export default function Database() {

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