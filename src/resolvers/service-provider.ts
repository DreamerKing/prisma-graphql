import "reflect-metadata";
import { Arg, Ctx, Mutation, Query, Resolver, ID } from "type-graphql";

import {
  ServiceProvider,
  CreateServiceProviderInput,
  UpdateServiceProviderInput,
} from "../entities/service-provider";
import { MyContext } from "../types";

@Resolver(ServiceProvider)
export default class ServiceProviderResolver {
  @Query(() => [ServiceProvider], { nullable: true })
  async allServiceProviders(@Ctx() { prisma }: MyContext) {
    return prisma.serviceProvider.findMany();
  }

  @Mutation(() => ServiceProvider)
  async createServiceProvider(
    @Arg("data") serviceProvider: CreateServiceProviderInput,
    @Ctx() { prisma }: MyContext
  ) {
    return prisma.serviceProvider.create({
      data: serviceProvider,
    });
  }

  @Mutation(() => Boolean)
  async removeServiceProvider(
    @Arg("id") id: number,
    @Ctx() { prisma }: MyContext
  ) {
    const removed = await prisma.serviceProvider.delete({ where: { id } });
    console.log(removed, "removed");

    if (removed) {
      return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  async updateServiceProvider(
    @Arg("data") serviceProvider: UpdateServiceProviderInput,
    @Ctx() { prisma }: MyContext
  ) {
    const { id, ...updateData } = serviceProvider;
    try {
      const updated = await prisma.serviceProvider.update({
        where: { id },
        data: updateData,
      });
      if (updated) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
}
