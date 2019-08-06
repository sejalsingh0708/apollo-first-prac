import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {BrowserRouter, Route} from "react-router-dom";
import logo from './spacex.jpg';
import './App.css';
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri : "http://localhost:8000/graph"
})
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <div className="container">
            <img src={logo} alt="spaceX" style={{width:300,margin:"auto" , display:"block" , maxHeight: 150}}/>
          </div>
         <Route  path ="/" exact component={Launches}/>
         <Route   path ="/launches/:flight_number"  component={Launch}/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
