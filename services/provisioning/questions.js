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
        answers: ['Mamífero', 'Ave', 'Pez', 'Insecto', 'Reptil'],
        filter: (animal, answer) => {
          return animal['tipo'] === answer;
        }
      });
    
      engine.create({
        key: 'habitat',
        question: '¿Dónde vive?',
        answers: ['Tierra', 'Aire', 'Agua'],
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
}