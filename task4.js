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
];
var strayIntake = intakes.filter(function (intakes) { return 'foundLocation' in intakes; });
var surrenderIntake = intakes.filter(function (intakes) { return 'surrenderReason' in intakes; });
function averageStrayAge(strayIntake) {
    var totalAge = 0;
    for (var _i = 0, strayIntake_1 = strayIntake; _i < strayIntake_1.length; _i++) {
        var stray = strayIntake_1[_i];
        totalAge = totalAge + stray.ageYears;
    }
    var averageAge = (totalAge / strayIntake.length).toFixed(2);
    return Number(averageAge);
}
function averageSurrenderAge(surrenderIntake) {
    var totalAge = 0;
    for (var _i = 0, surrenderIntake_1 = surrenderIntake; _i < surrenderIntake_1.length; _i++) {
        var surrender = surrenderIntake_1[_i];
        totalAge = totalAge + surrender.ageYears;
    }
    var averageAge = (totalAge / surrenderIntake.length).toFixed(2);
    return Number(averageAge);
}
console.log(averageStrayAge(strayIntake));
console.log(averageSurrenderAge(surrenderIntake));
