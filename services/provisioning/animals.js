export default function AnimalsProvisioning(service) {
    service.create({
        name: 'Elefante',
        tipo: 'Mamífero',
        trompa: 'Sí',
        habitat: 'Tierra',
        veneno: 'No',
        imageUrl: '/assets/Elephant_128.png'
    });
    
    service.create({
        name: 'Jirafa',
        tipo: 'Mamífero',
        cuello_largo: 'Sí',
        domestico: 'No',
        habitat: 'Tierra',
        veneno: 'No',
        imageUrl: '/assets/Elephant_128.png'
    });

    service.create({
        name: 'Perro',
        tipo: 'Mamífero',
        domestico: 'Sí',
        habitat: 'Tierra',
        veneno: 'No',
        imageUrl: '/assets/Elephant_128.png'
    });
    
    service.create({
        name: 'Pingüino',
        tipo: 'Ave',
        domestico: 'No',
        habitat: 'Tierra',
        veneno: 'No',
        imageUrl: '/assets/Elephant_128.png'
    });
    
    service.create({
        name: 'Tiburón',
        tipo: 'Pez',
        domestico: 'No',
        habitat: 'Agua',
        veneno: 'No',
        imageUrl: '/assets/Elephant_128.png'
    });
    
    service.create({
        name: 'Ornitorrinco',
        tipo: 'Mamífero',
        domestico: 'No',
        habitat: 'Tierra',
        veneno: 'Sí',
        tipoPico: 'Pato',
        imageUrl: '/assets/Platypus_128.png'
    });
    
    service.create({
        name: 'Camaleón',
        tipo: 'Reptil',
        domestico: 'No',
        habitat: 'Tierra',
        cambiaColor: 'Sí',
        veneno: 'No',
        imageUrl: '/assets/Chamaleon_128.png'
    });
    
    service.create({
        name: 'Cobra',
        tipo: 'Reptil',
        domestico: 'No',
        habitat: 'Tierra',
        veneno: 'Sí',
        imageUrl: '/assets/Chamaleon_128.png'
    });
}