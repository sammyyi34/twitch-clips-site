const express = require('express');
const path = require('path');
// apollo-server-express
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas')
//mongoose connector
const db = require('./config/connection');

//PORT
const PORT = process.env.PORT || 3001;

//creates new ApolloServer
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
  // to read the react content when it is deployed to the internet
  app.use(express.static(path.join(__dirname, '../client/build')))
}

// start ApolloServer, then connect to express, then connect to mongoose and lastly start the app
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    })
  })
}

startApolloServer();