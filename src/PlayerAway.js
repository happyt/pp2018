import React, { Component } from 'react';

export default class PlayerAway extends Component {

    render() {
        if (this.props.player.substring(0, 3) === "Bag") {
            console.log("player ", this.props.player);
        }
        
        return (
            <div className="player">
                <div className="name">
                    <div className={this.dynamicTab()}>{this.props.wins}</div> {this.props.player}</div>             
                    { this.props.nation ? 
                        <div className="nationality">
                    <div className={this.dynamicClass()}></div> {this.props.nation}</div>
                    : "" }
                    { this.props.star ? <div className="star"></div> : "" }
                    { this.props.winner ? <div className="winner"></div> : "" }
            </div>
        );
    }
     dynamicClass =function(){
        return "flag " + this.props.nation;
    }
     dynamicTab =function(){
        return "tab" + this.props.wins;
    }
}
