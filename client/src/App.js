import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CommentBox from './components/Starter/CommentBox';
// import Clips from './components/Clips';


const client = new ApolloClient ({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="text-3xl font-bold underline">
      
      <CommentBox />
      
              {/* <Clips /> */}
    </div>
    </ApolloProvider>

  );
}

export default App;