import { gql } from "apollo-server";

export const typeDefs = gql`
  type Meal {
    id: ID!
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID
    category: Category
  }
  input MealInput {
    title: String!
    description: String!
    imgsrc: String
    price: Float!
    categoryId: ID!
  }
  type Category {
    id: ID!
    title: String!
    meals: [Meal]
  }
  type Result {
    ok: Boolean!
    errors: [Error]
  }
  type Error {
    message: String!
  }
  type Query {
    meals: [Meal]
    meal(id: ID!): Meal
    categories: [Category]
  }
  type Mutation {
    addMeal(input: MealInput!): Result
    updateMeal(id: ID!, input: MealInput!): Result
   
  }
`;
