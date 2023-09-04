export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    authors: [Author]
}
`
// The `type Query` is an entrypoint basically.
// It's like a map for Apollo to structure the graph but they don't actually
// handle any queries.
// Essentially what we did above is to describe the data on the graph.

// Built-in scalar types in GraphQL:
// int, float, string, boolean, ID (used as key for data objects)
// we can make our own types as well.

// '!' signifies that the field is required.
// Also we don't need commas when mk

// the type Query{} is necessary to be included in e