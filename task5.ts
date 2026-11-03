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

interface MedicalHold {
    status: 'medicalHold';
    reasons: string;
}

type CaseStatus = Available | Pending | Adopted | MedicalHold

function describeCase(status: CaseStatus): string {
    switch (status.status) {
        case 'available':
            return 'Animal avaible for adoption';
        case 'pending':
            return 'Animal adoption is pending';
        case 'adopted':
            return 'Animal has been adopted';
        case 'medicalHold':
            return 'Animal is on medical hold';
    }
}

