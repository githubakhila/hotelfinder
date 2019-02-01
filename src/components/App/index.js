import React from "react";
import HotelList from "./hlist/index";
import NavBar from "./navbar/index";

import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom'

// const tableHeaders = ['Id','Name','Location','Price'];

class App extends React.Component{
   constructor(props){
      super(props)
       this.state = {
       data:[]
      }
   }

      componentDidMount(){

         const url = "http://localhost:9000/hotels"; 
         let headers = new Headers();
     
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
     
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
     
         headers.append('GET', 'POST');
     
         fetch(url, {
             headers: headers,
             method: 'GET'
         })
         .then(response => response.json())
         .then(contents => {console.log("in fetch: "+ contents);
                             this.setState ({
                             data : contents})
              })
         .catch(() => console.log("Can’t access " + url + " response. "))
        
     }

   render(){
      return(
         <Router>
            <Switch>
               <Route exact path="/home" render={(props) => {
                  return(
                     <div>
                        <NavBar/>
                       <HotelList 
                        hotel={this.state.data}
                        history={props.history}/>
                     </div>
                  )
               }}/>
               <Route exact path="/details" >
                <h1> Details Page</h1>
                  </Route>
                  
               <Redirect to="/home"/>
            </Switch> 
         </Router>
      );
   }
}



export default App;