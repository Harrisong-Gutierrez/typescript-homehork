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
