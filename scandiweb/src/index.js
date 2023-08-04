import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: "https://scandiweb-seven.vercel.app/",
  cache: new InMemoryCache()
});



//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ApolloProvider client={client}>
  
   <App />
 
  </ApolloProvider>,
 
);
