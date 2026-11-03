function formatChipReading(reading) {
    if (typeof reading === 'number') {
        return 'Chip #${reading}';
    }
    else {
        return 'Chip #${reading} (hand-entered)';
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
function unnarrowed(record) {
    return record.foundLocation;
}
