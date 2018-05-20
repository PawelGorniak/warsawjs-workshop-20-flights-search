import React, { Component } from 'react';

import './App.css';
import {SearchButton} from './shared/components/SearchButton';
import {FlightsView} from './shared/components/FlightsView';
import {SearchView} from './shared/components/SearchView';
class App extends Component {
  searchPressed() {
        console.log('search pressed');
    }

    render() {
        return (
            <div className="App">
                
                <SearchView onClick={this.searchPressed}/>
                <FlightsView/>
            </div>
        );
    }
}


export default App;
