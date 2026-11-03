function describeCase(status) {
    switch (status.status) {
        case 'available':
            return 'Animal avaible for adoption';
        case 'pending':
            return 'Animal adoption is pending';
        case 'adopted':
            return 'Animal has been adopted';
        case 'returned':
            return 'Animal has been returned';
        case 'medicalHold':
            switch (status.medStatus) {
                case 'quarantine':
                    return 'Animal is in quarantine';
                case 'injury':
                    return 'Animal is injured';
                case 'behaviouralHold':
                    return 'Animal is on behavioural hold';
            }
    }
}

