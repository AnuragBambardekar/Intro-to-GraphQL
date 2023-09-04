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
        reviews() {
            return db.reviews
        },
        review(_, args) {
            // args.id
            return db.reviews.find((review) => review.id === args.id)
        },
        authors() {
            return db.authors
        }
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