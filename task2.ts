interface ShelterAnimal {
    name: string;
    species: 'dog' | 'cat' | 'rabbit' | 'guinea pig';
    ageYears: number;
    weightKg: number;
}

const animalOne: ShelterAnimal = {
    name: 'Buster',
    species: 'dog',
    ageYears: 4,
    weightKg: 50
}

const animalTwo: ShelterAnimal = {
    name: 'Luna',
    species: 'cat',
    ageYears: 7,
    weightKg: 10
}


// task2.ts:8:18 - error TS2552: Cannot find name 'shelteranimal'. Did you mean 'ShelterAnimal'?

// 8 const animalOne: shelteranimal = {
//                    ~~~~~~~~~~~~~

// task2.ts:15:12 - error TS2693: 'ShelterAnimal' only refers to a type, but is being used as a value here.

// 15 animalTwo: ShelterAnimal = {
//               ~~~~~~~~~~~~~


// Found 2 errors in the same file, starting at: task2.ts:8

// Didn't even reach animalName = true

//All 3 errors are distinct