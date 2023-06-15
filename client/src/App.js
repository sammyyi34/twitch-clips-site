import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clips from './components/Clips';

const client = new ApolloClient ({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="text-3xl font-bold underline">
      testing
      <Clips />
    </div>
    </ApolloProvider>

  );
}

export default App;