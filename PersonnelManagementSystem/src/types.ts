
export interface Employee {
    name: string;
    age: number;
}


export type AddSalary<T extends Employee> = T & (T extends EmployeeWithSalary ? { salary: number } : {});


export interface Manager extends AddSalary<Employee> {
    department: string;
}

export interface Intern extends AddSalary<Employee> {
    project: string;
}

export interface Engineering extends AddSalary<Employee> {
    project: string;
}

export interface QualityAssurance extends AddSalary<Employee> {
    project: string;
}

export interface Management extends AddSalary<Employee> {
    project: string;
}

export interface Design extends AddSalary<Employee> {
    project: string;
}

export type Role = Manager | Intern | Engineering | QualityAssurance | Management | Design;


export interface EmployeeWithSalary extends Employee {
    salary: number;
}

