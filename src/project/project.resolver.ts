import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/input/create-project.input';
import { UpdateProjectInput } from './dto/input/update-project.input';

@Resolver(() => Project)
export class ProjectResolver {

  constructor(private projectService: ProjectService) {}

  @Mutation(() => Project, { name: "createProject" })
  createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id') id: string) {
    return this.projectService.findOne(id);
  }

}
