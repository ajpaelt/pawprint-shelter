function formatChipReading(reading) {
    if (reading === undefined) {
        return 'Not yet chipped';
    }
    if (typeof reading === 'number') {
        return "Chip #".concat(reading);
    }
    else {
        return "Chip #".concat(reading, " (hand-entered)");
    }
}
function describeIntake(record) {
    if ('foundLocation' in record) {
        return 'Animal is a stray';
    }
    else {
        return 'Animal is a surrender';
    }
}
function isUrgentStray(record) {
    if (record.species === 'dog') {
        return true;
    }
    else {
        return false;
    }
}
function priority(isUrgentStray) {
    if (isUrgentStray === true) {
        return 'prioritise';
    }
    else {
        return 'standard queue';
    }
}
// function unnarrowed(record: IntakeRecord) {
//     return record.foundLocation
// }
// NOTES
// You could add a chipped field to both StrayIntake and SurrenderIntake, this could help narrow down
// between both interfaces as a chipped animal would probably be a lost animal and a non chipped 
// animal would probably be a stray
var intakes = [
    { name: "Biscuit", species: "dog", ageYears: 3, foundLocation: "Kelvingrove Park" },
    { name: "Mittens", species: "cat", ageYears: 7, surrenderReason: "Owner moving abroad" },
    { name: "Thumper", species: "rabbit", ageYears: 1, foundLocation: "Behind Partick station", notes: "Very shy" },
    { name: "Pepper", species: "guinea-pig", ageYears: 2, surrenderReason: "Child allergic" },
    { name: "Rex", species: "dog", ageYears: 5, foundLocation: "Byres Road", notes: "No microchip" },
    { name: "Luna", species: "cat", ageYears: 4, surrenderReason: "Landlord won't allow pets" },
    { name: "Clover", species: "rabbit", ageYears: 2, foundLocation: "Queens Park" },
];
var strayIntake = intakes.filter(function (intakes) { return 'foundLocation' in intakes; });
