import React, { Component } from 'react';
import PlayerHome from './PlayerHome.js';
import PlayerAway from './PlayerAway.js';

export default class PPMatchHoriz extends Component {

    render() {

        const mat = JSON.parse(this.props.matchData);

        const setsA = mat.Sets.map((ss, index) => {
             return(ss.ScoreA);
        });
       const setsB = mat.Sets.map((ss, index) => {
             return(ss.ScoreB);
        });

        let listScores = "";
        listScores = mat.Sets.map((ss, index) => (
            <div key={index} className="set">{ss.ScoreA} - {ss.ScoreB}, </div>          
        ));


        return (
            <div className="match">
                <PlayerHome player={mat.PlayerA ? mat.PlayerA : "-"}
                    nation={mat.CountryA ? mat.CountryA : ""}
                    winner={mat.Result === 1 ? "*" : ""}
                    star={mat.SeedA > 0 ? "*" : ""}
                    scores={setsA}
                    wins={mat.ID < 81 ? mat.TabA : "0"} />
                    <div>{listScores}</div>
                <PlayerAway player={mat.PlayerB ? mat.PlayerB : "-"}
                    nation={mat.CountryB ? mat.CountryB : ""}
                    winner={mat.Result === 2 ? "*" : ""}
                    star={mat.SeedB > 0 ? "*" : ""}
                    scores={setsB}
                    wins={mat.ID < 81 ? mat.TabB : "0"} />
            </div>
        );
    }
}
