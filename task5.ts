interface AnimalCase {
  isAvailable: boolean;
  isPending: boolean;
  isAdopted: boolean;
  adopterName?: string;
}

// adopterName? and isAvailable
// isAvailable and isAdopted

interface Available {
    status: 'available';
}

interface Pending {
    status: 'pending';
    prospectiveAdopterName: string;
}

interface Adopted {
    status: 'adopted';
    AdopterName: string;
    AdoptedDate: Date;
}

interface Returned {
    status: 'returned'
    previousAdopter: string;
    reasonForReturn: string;
}


interface Quarantine {
    status: 'medicalHold';
    medStatus: 'quarantine';
    daysRemaining: number;
}

interface Injury {
    status: 'medicalHold';
    medStatus: 'injury';
    treatmentPlan: string;
}

interface BehaviouralHold {
    status: 'medicalHold';
    medStatus: 'behaviouralHold';
    assessedBy: string;
}

type MedicalHold = Quarantine | Injury | BehaviouralHold

type CaseStatus = Available | Pending | Adopted | Returned | MedicalHold

function describeCase(status: CaseStatus): string {
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


