import React, { Component } from 'react';
import './App.css';

import './PPTable.css';
import PPGroupTable from './PPGroupTable';

export default class App extends Component {

  render() {
    const d = new Date().toLocaleString();    
    console.log("APP", JSON.stringify(this.props.matches.Matches[0]));

    return (
      <div className="App">
        <div className="App-header">
          <h2>Scoring
          </h2>
        </div>

      <div className="siteContent">
          <PPGroupTable group="4" db={this.props} />
        </div>
     
          <footer className="fix-footer is-size-7">
            <div className="container">
            <section>
              Results 2017 - {d}
              </section>
            </div>
          </footer>
      </div>
    );
  }
}
