import React, { Component } from 'react';

export default class PPGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grpX : ["A", "B", "C", "D", "E", "F", "G", "H"].splice(this.props.group,1)
        }
    }
    render() {

        return (
            <div>
                <div className="heading">GROUP {this.state.grpX}</div>
            </div>

        );
    }
}
