import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Clips from './components/Clips';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  // callback functions that allow us to pass data from the Search component to the Clips component
  const [clipsData, setClipsData] = useState([]);

  return (
    <ApolloProvider client={client}>
    <div className="text-3xl font-bold underline">
      testing
      {/* <Clips /> */}
    </div>
    </ApolloProvider>
  );
}

export default App;
