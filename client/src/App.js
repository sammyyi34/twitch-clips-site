import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Search from './components/Search';
import HomepageClips from './components/HomepageClips';


const client = new ApolloClient ({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container mx-auto">
      <Search />
      <HomepageClips />
    </div>
    </ApolloProvider>

  );
}

export default App;