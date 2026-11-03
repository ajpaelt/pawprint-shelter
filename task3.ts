type IntakePriority = {
    priority: 1 | 2 | 3
};

const intakepriority: IntakePriority = {
    priority: 2
};


interface Microchipped {
    chipNumber: string;
};

interface ShelterAnimal {
    name: string;
    species: 'dog' | 'cat' | 'rabbit' | 'guinea pig';
    ageYears: number;
    weightKg: number;
}

type TraceableAnimal = Microchipped & ShelterAnimal;

const animalOne: TraceableAnimal = {
    name: "Gabe",
    species: 'guinea pig',
    ageYears: 1,
    weightKg: 1,
    chipNumber: '287031'
};