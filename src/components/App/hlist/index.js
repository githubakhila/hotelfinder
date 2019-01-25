import React from "react";
import Hotel from "./hotel";
class HotelList extends React.Component{
    render(){
        return(
            <div>
                {this.props.hotel.map(h => <Hotel key={h.id} name={h.name} location={h.location} price={h.price} history={this.props.history}/>)}

            </div>
        )
    }
}
export default HotelList;