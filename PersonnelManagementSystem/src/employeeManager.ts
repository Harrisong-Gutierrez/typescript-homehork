

// import { Employee, EmployeeWithSalary } from './types';
// import { validateName } from './decorators';

// export class EmployeeManager {
//     employees: (Employee | EmployeeWithSalary)[] = [];

//     @validateName
//     addEmployee(employee: Employee | EmployeeWithSalary) {
//         this.employees.push(employee);
//     }

//     calculateTotalSalary(): number {

//         const employeesWithSalary = this.employees.filter(
//             (employee): employee is EmployeeWithSalary => 'salary' in employee
//         );
//         return employeesWithSalary.reduce((total, employee) => total + employee.salary, 0);
//     }
// }
import { validateName } from './decorators';
import { Employee, EmployeeWithSalary } from './types';

export class EmployeeManager {
    employees: (Employee | EmployeeWithSalary)[] = [];

    @validateName
    addEmployee(employee: Employee | EmployeeWithSalary) {
        this.employees.push(employee);
    }

    calculateTotalSalary(): number {

        const employeesWithSalary = this.employees.filter(
            (employee): employee is EmployeeWithSalary => 'salary' in employee
        );
        return employeesWithSalary.reduce((total, employee) => total + employee.salary, 0);
    }
}
