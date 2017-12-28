import React, { Component } from 'react';
import Player from './Player.js';

export default class PPMatchVert extends Component {

    render() {

        const mat = JSON.parse(this.props.matchData);

        const setsA = mat.Sets.map((ss, index) => {
             return(ss.ScoreA);
        });
       const setsB = mat.Sets.map((ss, index) => {
             return(ss.ScoreB);
        });

        return (
            <div className="match">
                <Player player={mat.PlayerA ? mat.PlayerA : "-"}
                    nation={mat.CountryA ? mat.CountryA : ""}
                    winner={mat.Result === 1 ? "*" : ""}
                    star={mat.SeedA > 0 ? "*" : ""}
                    scores={setsA}
                    wins={mat.ID < 81 ? mat.TabA : "0"} />
                <Player player={mat.PlayerB ? mat.PlayerB : "-"}
                    nation={mat.CountryB ? mat.CountryB : ""}
                    winner={mat.Result === 2 ? "*" : ""}
                    star={mat.SeedB > 0 ? "*" : ""}
                    scores={setsB}
                    wins={mat.ID < 81 ? mat.TabB : "0"} />
            </div>
        );
    }
}
