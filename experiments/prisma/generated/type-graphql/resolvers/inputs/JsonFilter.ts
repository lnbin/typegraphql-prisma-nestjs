import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonFilter {
  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true,
    description: undefined
  })
  equals?: InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => NestedJsonFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedJsonFilter | undefined;
}
