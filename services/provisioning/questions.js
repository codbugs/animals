export default function QuestionsProvisioning(engine) {

    engine.create({
        key: 'trompa',
        question: '¿Tiene trompa el animal pensado?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          if(answer === 'Sí') {
            return animal['trompa'] === 'Sí';
          }
  
          return animal['trompa'] === 'No' || Object.keys(animal).includes('trompa') === false;
        }
      });
    
      engine.create({
        key: 'cuello_largo',
        question: '¿Tiene cuello largo el animal pensado?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          if(answer === 'Sí') {
            return animal['cuello_largo'] === 'Sí';
          }
  
          return animal['cuello_largo'] === 'No' || Object.keys(animal).includes('cuello_largo') === false;
        }
      });
    
      engine.create({
        key: 'domestico',
        question: '¿Es doméstico?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          if(answer === 'Sí') {
            return animal['domestico'] === 'Sí';
          }
  
          return animal['domestico'] === 'No' || Object.keys(animal).includes('domestico') === false;
        }
      });
    
      engine.create({
        key: 'tipo',
        question: '¿Qué tipo de animal has pensado?',
        answers: ['Mamífero', 'Ave', 'Pez', 'Insecto', 'Reptil', 'Molusco'],
        filter: (animal, answer) => {
          return animal['tipo'] === answer;
        }
      });
    
      engine.create({
        key: 'habitat',
        question: '¿Dónde vive?',
        answers: ['Tierra', 'Aire', 'Agua', 'Granja'],
        filter: (animal, answer) => {
          return animal['habitat'] === answer;
        }
      });
    
      engine.create({
        key: 'veneno',
        question: '¿Tiene veneno?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['veneno'] === answer || Object.keys(animal).includes('veneno') === false;
        }
      });
    
      engine.create({
        key: 'cambiaColor',
        question: '¿Puede cambiar de color?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['cambiaColor'] === answer || Object.keys(animal).includes('cambiaColor') === false;
        }
      });
    
      engine.create({
        key: 'tipoPico',
        question: '¿Qué tipo de pico tiene?',
        answers: ['Pato', 'Otro'],
        filter: (animal, answer) => {
          return animal['tipoPico'] === answer || Object.keys(animal).includes('tipoPico') === false;
        }
      });
    
      engine.create({
        key: 'tentaculos',
        question: 'Tiene tentáculos?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['tentaculos'] === answer || Object.keys(animal).includes('tentaculos') === false;
        }
      });
    
      engine.create({
        key: 'vuela',
        question: '¿Vuela?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['vuela'] === answer || Object.keys(animal).includes('vuela') === false;
        }
      });
    
      engine.create({
        key: 'miel',
        question: '¿Hace miel?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['miel'] === answer || Object.keys(animal).includes('miel') === false;
        }
      });
    
      engine.create({
        key: 'telaraña',
        question: '¿Hace telarañas?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['telaraña'] === answer || Object.keys(animal).includes('telaraña') === false;
        }
      });
    
      engine.create({
        key: 'caparazon',
        question: '¿Su casa es un caparazón?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['caparazon'] === answer || Object.keys(animal).includes('caparazon') === false;
        }
      });
    
      engine.create({
        key: 'melena',
        question: '¿Tiene melena?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['melena'] === answer || Object.keys(animal).includes('melena') === false;
        }
      });
    
      engine.create({
        key: 'nariz_espada',
        question: '¿Su nariz tiene forma de espada?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['nariz_espada'] === answer || Object.keys(animal).includes('nariz_espada') === false;
        }
      });
    
      engine.create({
        key: 'cola_tirabuzon',
        question: '¿Su cola tiene forma de tirabuzón?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['cola_tirabuzon'] === answer || Object.keys(animal).includes('cola_tirabuzon') === false;
        }
      });
    
      engine.create({
        key: 'orejas_alargadas',
        question: '¿Sus orejas son alargadas?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['orejas_alargadas'] === answer || Object.keys(animal).includes('orejas_alargadas') === false;
        }
      });
    
      engine.create({
        key: 'carnivoro',
        question: '¿Come carne?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['carnivoro'] === answer || Object.keys(animal).includes('carnivoro') === false;
        }
      });
    
      engine.create({
        key: 'herbivoro',
        question: '¿Come hojas, plantas o semillas?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['herbivoro'] === answer || Object.keys(animal).includes('herbivoro') === false;
        }
      });
    
      engine.create({
        key: 'omnivoro',
        question: '¿Come carne y hojas, plantas o semillas?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['omnivoro'] === answer || Object.keys(animal).includes('omnivoro') === false;
        }
      });
    
      engine.create({
        key: 'felino',
        question: '¿Pertenece a la familia de los felinos?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['felino'] === answer || Object.keys(animal).includes('felino') === false;
        }
      });
    
      engine.create({
        key: 'canino',
        question: '¿Pertenece a la familia de los caninos?',
        answers: ['Sí', 'No'],
        filter: (animal, answer) => {
          return animal['canino'] === answer || Object.keys(animal).includes('canino') === false;
        }
      });
}