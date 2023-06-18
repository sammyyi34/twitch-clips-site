import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from "react";
import Search from './components/Search';
import HomepageClips from './components/HomepageClips';
import Clips from './components/Clips'


const client = new ApolloClient ({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})


function App() {
  // callback functions that allow us to pass data from the Search component to the Clips component
  const [clipsData, setClipsData] = useState([]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container mx-auto">
          <Search setClipsData={setClipsData} />
          <Routes>
            <Route path="/" element={<HomepageClips />} />
            <Route path="/clips" element={<Clips clipsData={clipsData} />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;