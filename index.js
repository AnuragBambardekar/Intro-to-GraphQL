import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

// db
import db from './_db.js'

// types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        // create a resolver function for each property in type Query
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            // args.id
            return db.reviews.find((review) => review.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((g) => g.id === parent.game_id)
        },
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs - they are definitions of types of data
    typeDefs,
    // These typeDefs + relationship of them to other types
    // + queries that can be made, combine up together to form a schema.
    // Schema is something that describes the shape of the graph and
    // the data available on it.
    
    // resolvers - return data to the client
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server up and running at Port: ', 4000)