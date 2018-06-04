import React, {Component} from 'react';
import Proptypes from 'prop-types';

export class FlightsView extends Component{
	render(){
		const {onClick} = this.props;
		const {text} = this.props;
		return(
			<div>
				<ol>
					<li>Flight #1</li>
					<li>Flight #2</li>
					<li>Flight #3</li>
				</ol>
				<button onClick={onClick}>{text}</button>
			</div>
		)
	}
}

FlightsView.propTypes = {

};