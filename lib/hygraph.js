import { GraphQLClient } from "graphql-request";
// const GraphQLClient = require("graphql-request").GraphQLClient;
export default function connectHygraph() {
  return new GraphQLClient(`${process.env.NEXT_PUBLIC_HYGRAPH_PUBLIC_URL}`);
}
