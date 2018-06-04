import React, { Component } from 'react';

import './App.css';
import {SearchButton} from './shared/components/SearchButton';
import {FlightsView} from './shared/components/FlightsView';
import {SearchView} from './shared/components/SearchView';
import {AirportService} from './shared/services/AirportService';
class App extends Component {
  state = {
      searchVisible:true,
      airports: []
    };
    constructor(props){
        super(props);
        this.searchPressed = this.searchPressed.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

  searchPressed() {
        this.setState({
          searchVisible: false
        })
    };
  onBackClick() {
    this.setState({
        searchVisible: true
    }, () => {
        console.log(this.state);
        });
    console.log(this.state);
};
componentDidMount() {
        AirportService.getAirportSources().then(airports => {
            console.log(airports);
            this.setState({
                airports    //shortcut
            })
        })
    }

    render() {
      const {searchVisible} = this.state;
      const {airports}= this.state;
        return (
            <div className="App">
            
            {searchVisible && <SearchView airports={airports} onClick={this.searchPressed}/>}
            {!searchVisible && <FlightsView onClick={this.onBackClick} text={'Go Back'}/>}
            </div>
        );
        
    }
    
}



export default App;
