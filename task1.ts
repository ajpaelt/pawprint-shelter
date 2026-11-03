function shelterDomain(animal: string, quantity: number): string {
    return 'There are ${number} ${animal}s';
};


interface AnimalInterface {
    animalName: string;
    animalQuantity: number;
    isMale: boolean;
};

function animalRegister(animalDetails: AnimalInterface) {
    return 'There are ${animalName} ${animalQuantity}s, are they male? ${isMale}';
};

// Type layer checks the types of our inputs in ts and then dissapears when compiled in js as it doesn't deal with/check for type errors.
// Similairly with the interface, it makes sure any function invoking its input types has all of them and are of the correct type before dissapearing in the js file. 