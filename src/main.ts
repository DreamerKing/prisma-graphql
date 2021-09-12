import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import * as tq from "type-graphql";
import ServiceProviderResolver from "./resolvers/service-provider";

const PORT = 3000;

async function main() {
  const prisma = new PrismaClient();
  const schema = await tq.buildSchema({
    resolvers: [ServiceProviderResolver],
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
    }),
  });
  server.listen({ port: PORT }, () => console.log(`listening on ${PORT}`));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
