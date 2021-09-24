import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/input/create-employee.input';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>, private projectService: ProjectService) { }

    async findAllEmployees(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    async createEmployee(employee:CreateEmployeeInput) :Promise<Employee> {

        let emp = this.employeeRepository.create(employee);
        return this.employeeRepository.save(emp);
    }

    async getProject(id: string): Promise<Project> {
        return this.projectService.findOne(id)
    }

}
