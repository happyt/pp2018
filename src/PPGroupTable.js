import React, { Component } from 'react';
import PPGroupMatch from './PPGroupMatch';

export default class PPGroupTable extends Component {

    render() {
        const startNo = this.props.group * 10;
        const tableMatches = this.props.db.matches.Matches.slice(startNo, startNo + 10);

        const listItems = tableMatches.map((mm, index) => (
            <PPGroupMatch key={index} matchData={JSON.stringify(mm)} />
        ));

        return (
            <div className="scores">
                <div >
                    {listItems}
                </div>
            </div>

        );
    }
}
