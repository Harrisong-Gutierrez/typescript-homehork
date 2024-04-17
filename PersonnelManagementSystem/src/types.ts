// export interface Employee {
//     name: string;
//     age: number;
// }

// export interface Manager extends Employee {
//     department: string;
// }

// export interface Intern extends Employee {
//     project: string;
// }

// export interface Engineering extends Employee {
//     project: string;
// }

// export interface QualityAssurance extends Employee {
//     project: string;
// }

// export interface Management extends Employee {
//     project: string;
// }

// export interface Design extends Employee {
//     project: string;
// }




// export type Role = Manager | Intern | Engineering | QualityAssurance | Management | Design;

// export interface EmployeeWithSalary extends Employee {
//     salary: number;
// }
export interface Employee {
    name: string;
    age: number;
}

export interface Manager extends Employee {
    department: string;
}

export interface Intern extends Employee {
    project: string;
}

export interface Engineering extends Employee {
    project: string;
}

export interface QualityAssurance extends Employee {
    project: string;
}

export interface Management extends Employee {
    project: string;
}

export interface Design extends Employee {
    project: string;
}

export type Role = Manager | Intern | Engineering | QualityAssurance | Management | Design;

export interface EmployeeWithSalary extends Employee {
    salary: number;
}
