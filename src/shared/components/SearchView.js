import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "./SearchButton";
import {SelectAirport} from "./SelectAirport";

export class SearchView extends Component {
    render() {
    	const {airports}= this.props;
        const {onClick} = this.props;
        return (
            <div>
                <SearchButton text={`Search for the flights`} onClick={onClick}/>
                <SelectAirport airports = {airports}/>
                <SelectAirport airports = {airports}/>

            </div>
        )
    }
}

SearchView.propTypes = {
    onClick: PropTypes.func.isRequired
};