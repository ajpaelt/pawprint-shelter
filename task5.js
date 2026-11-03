function describeCase(status) {
    switch (status.status) {
        case 'available':
            return 'Animal avaible for adoption';
        case 'pending':
            return 'Animal adoption is pending';
        case 'adopted':
            return 'Animal has been adopted';
        case 'medicalHold':
            return 'Animal is on medical hold';
        case 'returned':
            return 'Animal has been returned';
    }
}

console.log(describeCase({
    status: 'returned',
    previousAdopter: 'Dave',
    reasonForReturn: 'angry dog'
}));