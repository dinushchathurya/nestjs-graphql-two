import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/input/create-employee.input';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) { }

    async findAllEmployees(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    async createEmployee(employee:CreateEmployeeInput) :Promise<Employee> {

        let emp = this.employeeRepository.create(employee);
        return this.employeeRepository.save(emp);
    }

}
