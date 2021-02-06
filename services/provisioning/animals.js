export default function AnimalsProvisioning(engine) {
    engine.create({
        name: 'Elefante',
        tipo: 'Mamífero',
        trompa: 'Sí',
        habitat: 'Tierra'
    });
    
    engine.create({
        name: 'Jirafa',
        tipo: 'Mamífero',
        cuello_largo: 'Sí',
        domestico: 'No',
        habitat: 'Tierra'
    });

    engine.create({
        name: 'Perro',
        tipo: 'Mamífero',
        domestico: 'Sí',
        habitat: 'Tierra'
    });
    
    engine.create({
        name: 'Pingüino',
        tipo: 'Ave',
        domestico: 'No',
        habitat: 'Tierra'
    });
    
    engine.create({
        name: 'Tiburón',
        tipo: 'Pez',
        domestico: 'No',
        habitat: 'Agua'
    });
}