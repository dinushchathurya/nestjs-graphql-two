import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import config from 'ormconfig';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot({ 
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot(config)
],
  controllers: [],
  providers: [],
})

export class AppModule {}
