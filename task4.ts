interface StrayIntake {
  name: string;
  species: "dog" | "cat" | "rabbit" | "guinea-pig";
  ageYears: number;
  foundLocation: string;
  notes?: string;
}

interface SurrenderIntake {
  name: string;
  species: "dog" | "cat" | "rabbit" | "guinea-pig";
  ageYears: number;
  surrenderReason: string;
  notes?: string;
}

type IntakeRecord = StrayIntake | SurrenderIntake;

function formatChipReading(reading: number | string): string {
    if (typeof reading === 'number') {
        return 'Chip #${reading}'
    } else {
        return 'Chip #${reading} (hand-entered)'
    }
}

function describeIntake(record: IntakeRecord): string {
    if ('foundLocation' in record) {
        return 'Animal is a stray'
    } else {
        return 'Animal is a surrender'
    }
}

function isUrgentStray(record: IntakeRecord): record is StrayIntake {

    if (record.species === 'dog') {
        return true
    } else {
        return false
    }

    }

function priority(isUrgentStray: boolean): string {
    if (isUrgentStray === true) {
        return 'prioritise'
    } else {
        return 'standard queue'
    }
}

// function unnarrowed(record: IntakeRecord) {
//     return record.foundLocation
// }


// NOTES
// You could add a chipped field to both StrayIntake and SurrenderIntake, this could help narrow down
// between both interfaces as a chipped animal would probably be a lost animal and a non chipped 
// animal would probably be a stray