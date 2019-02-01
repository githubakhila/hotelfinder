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
   
//    state={
//       tableValues : []
//    }

//    constructor(prop){
//       super(prop);
//       this.createRecord=this.createRecord.bind(this);
//    }

//    fetchList(){
//       let self=this;
//       const request=new Request('/heroes',{method: 'GET', headers: {"Content-Type":"application/json"}})
//       fetch(request)
//       .then(res => res.json())
//       .then(function(data){
//          self.setState({'tableValues':data});

//       }
//       )

//    }

//    componentDidMount(){
//       this.fetchList();
//    }

//    createRecord(name,alias,team)
//    {
//       let self=this;
//       console.log(name,alias,team)
//       // const ID=(Math.ceil(Math.random() * 100)).toString();
//       // const newRecord = [ID,name,alias,team]
//       // //const newTableValues = this.state.tableValues.map(val => val)
//       // const newTableValues = [...this.state.tableValues]
//       // newTableValues.push(newRecord)
//       // this.setState({tableValues: newTableValues})
//       var body = {
//          name: name,
//          alias: alias,
//          team: team
//       };
//       var request=new Request('/heroes',{
//          method: 'POST', 
//          body: JSON.stringify(body),
//          headers: {"Content-Type":"application/json"}
//       })
//       fetch(request)
//       .then(function(){
//          self.fetchList()
//       })

//    }


  
   render(){
      return(
         <Router>
            <Switch>
               <Route exact path="/home" render={(props) => {
                  return(
                     <div>
                        <NavBar/>
                       <HotelList 
                        hotel={hdetails}
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
const hdetails = [
   {id:1,name: "Peerless Inn",location:"Hyderabad",price:"5000"},
   {id:2,name: "Taj",location:"Hyderabad",price:"6000"},
   {id:3,name: "ITC Kakathiya",location:"Hyderabad",price:"10000"},
]



export default App;