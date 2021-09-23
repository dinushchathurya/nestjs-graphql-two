import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateEmployeeInput  {

    @Field()
    @IsNotEmpty()
    firstName: string

    @Field()
    @IsNotEmpty()
    lastName: string

    @Field()
    @IsNotEmpty()
    designation: string

    @Field({nullable: true})
    city: string

}