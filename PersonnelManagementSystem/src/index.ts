import { EmployeeManager, loadEmployees } from './employees';


const manager = new EmployeeManager();

loadEmployees().then(() => {
    console.log(manager.employees);
});

