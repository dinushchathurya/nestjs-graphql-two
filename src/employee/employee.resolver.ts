import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeInput } from './dto/input/create-employee.input';

@Resolver(()=> Employee)
export class EmployeeResolver {
    
    constructor(private employeeService:EmployeeService) { }

    @Query(() => [Employee], { name: "findAllEmployees" })
    findAllEmployees() {
        return this.employeeService.findAllEmployees();
    }

    @Mutation(() => Employee, { name:"createEmployee" })
    createEmployee(@Args('employee') employee:CreateEmployeeInput) {
        return this.employeeService.createEmployee(employee);
    }
}
