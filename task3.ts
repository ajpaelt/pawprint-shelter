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

interface Vaccinated {
    vaccinatedOn: string;
}

interface LegacyRecord {
    chipNumber: number;
}

type TraceableAnimal = Microchipped & ShelterAnimal;

type FullyProcessedAnimal = ShelterAnimal & Microchipped & Vaccinated;

type Conflicted = Microchipped & LegacyRecord;

const animalThree: Conflicted = {
    chipNumber: '12345',
    chipNumber: 12345
}

const animalTwo: FullyProcessedAnimal = {
    name: 'Sally',
    species: 'rabbit',
    ageYears: 3,
    weightKg: 1,
    chipNumber: '12345',
    vaccinatedOn: '12/04/26'
}

const animalOne: TraceableAnimal = {
    name: "Gabe",
    species: 'guinea pig',
    ageYears: 1,
    weightKg: 1,
    chipNumber: '287031'
};






// task3.ts:36:5 - error TS2322: Type 'string' is not assignable to type 'never'.

// 36     chipNumber: '12345',
//        ~~~~~~~~~~

//   task3.ts:11:5
//     11     chipNumber: string;
//            ~~~~~~~~~~
//     The expected type comes from property 'chipNumber' which is declared here on type 'Conflicted'

// task3.ts:37:5 - error TS1117: An object literal cannot have multiple properties with the same name.

// 37     chipNumber: 12345
//        ~~~~~~~~~~

// task3.ts:37:5 - error TS2322: Type 'number' is not assignable to type 'never'.

// 37     chipNumber: 12345
//        ~~~~~~~~~~

//   task3.ts:11:5
//     11     chipNumber: string;
//            ~~~~~~~~~~
//     The expected type comes from property 'chipNumber' which is declared here on type 'Conflicted'


// Found 3 errors in the same file, starting at: task3.ts:36