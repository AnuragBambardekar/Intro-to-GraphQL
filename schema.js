export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput!): Game
}
input AddGameInput {
    title: String!,
    platform: [String!]!
}
input EditGameInput {
    title: String,
    platform: [String!]
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