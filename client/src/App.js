import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clips from './components/Clips';
import Search from './components/UserSearch';
import Homepage from './components/Homepage';

const client = new ApolloClient ({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container mx-auto">
      <Search />
      <Homepage />
    </div>
    </ApolloProvider>

  );
}

export default App;