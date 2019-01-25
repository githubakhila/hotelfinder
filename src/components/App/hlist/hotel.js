import React from 'react';
import styled from "styled-components";
const H = styled.div`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Column=styled.div`
    float:right;
`;

// import { browserHistory } from 'react-router';
import {withRouter} from 'react-router-dom';
class Hotel extends React.Component{

    constructor(props){
        super(props)
        this.onViewClick=this.onViewClick.bind(this)

    }

    onViewClick(){
        console.log("Hai")
        //const path = `details`
        // browserHistory.push(path)
        this.props.history.push(`/details`)
      
    }
    
    render(){
        return(
            <div><br></br>
                <H>
                    <Column><Button onClick={this.onViewClick}>view</Button></Column>
                    <span>{this.props.name}</span><br></br>
                    <span>{this.props.location}</span><br></br>
                    <span>{this.props.price}</span><br></br>
                </H>
            </div>
        )
    }
}
export default Hotel;