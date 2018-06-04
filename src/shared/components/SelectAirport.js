import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SelectAirport extends Component{
	state = {value:''};
	extraSelectedValue(event){
		return event.target.value;
	}
	}
	render() {
		const {onChange,airports, label} = this.props;
		const{selectedAirport} = this.state;
		
		return (
           <div>
               <select value={this.state.value} onChange={this.handleChange}>{airports.map(
               (airport, index) => <option key={airport.id} value={airport}>{airport.city} | {airport.code}</option>
               )}</select>

     
             <br/>
             <br/>
             <br/>          
               
           </div>
       )
    }
}
