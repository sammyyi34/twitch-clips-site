import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clips from './components/Clips';
import Search from './components/Search';

const client = new ApolloClient ({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container mx-auto">
      <Search />
      <Clips />
    </div>
    </ApolloProvider>

  );
}

export default App;