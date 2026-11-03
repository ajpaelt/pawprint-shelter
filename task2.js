var animalOne = {
    name: 'Buster',
    ageYears: 4,
    weightKg: 50
};
var animalTwo = {
    name: 'Luna',
    ageYears: 7,
    weightKg: 10
};
var exampleOne = {
    name: 'Felix',
    ageYears: 5,
    gender: 'male',
    weightKg: 10
};
var exampleTwoRaw = {
    name: 'Cindy',
    ageYears: 4,
    gender: 'female',
    weightKg: 12
};
var exampleTwoTyped = exampleTwoRaw;
// task2.ts:8:18 - error TS2552: Cannot find name 'shelteranimal'. Did you mean 'ShelterAnimal'?
// 8 const animalOne: shelteranimal = {
//                    ~~~~~~~~~~~~~
// task2.ts:15:12 - error TS2693: 'ShelterAnimal' only refers to a type, but is being used as a value here.
// 15 animalTwo: ShelterAnimal = {
//               ~~~~~~~~~~~~~
// Found 2 errors in the same file, starting at: task2.ts:8
// Didn't even reach animalName = true
//All 3 errors are distinct
