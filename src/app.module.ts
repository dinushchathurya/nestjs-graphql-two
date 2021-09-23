import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import config from 'ormconfig';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [
    EmployeeModule,
    ProjectModule,
    GraphQLModule.forRoot({ 
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot(config),
  ]
})

export class AppModule {}
