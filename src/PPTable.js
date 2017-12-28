import React, { Component } from 'react';
import PPGroupHeader from './PPGroupHeader';
import PPMatchVert from './PPMatchVert';

export default class PPTable extends Component {

    render() {
        const startNo = this.props.group * 10;
        const tableMatches = this.props.db.matches.Matches.slice(startNo, startNo + 10);

        const listItems = tableMatches.map((mm, index) => (
            <PPMatchVert key={index} matchData={JSON.stringify(mm)} />
        ));

        return (
            <div>
                <div className="column">
                    <PPGroupHeader group={this.props.group} />
                    {listItems}
                </div>
            </div>

        );
    }
}
