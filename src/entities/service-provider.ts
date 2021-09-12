import "reflect-metadata";
import { ArgsType, Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class ServiceProvider {
  @Field(() => ID)
  id!: number;

  @Field((type) => String)
  name!: string;

  @Field((type) => Boolean)
  isLogistic?: boolean;

  @Field(() => Boolean)
  isWarehouse?: boolean;

  @Field(() => String)
  contact!: string;

  @Field(() => String)
  mobile!: string;
}

@InputType()
export class CreateServiceProviderInput {
  @Field()
  name!: string;

  @Field()
  contact!: string;

  @Field()
  mobile!: string;
}

@InputType()
export class UpdateServiceProviderInput {
  @Field()
  id!: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  isLogistic?: boolean;

  @Field({ nullable: true })
  isWarehouse?: boolean;

  @Field({ nullable: true })
  contact?: string;

  @Field({ nullable: true })
  mobile?: string;
}
