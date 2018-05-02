import React, {Component} from 'react'
import Player              from './Player'
import {Redirect} from 'react-router-dom'
class PlayerList extends Component {
  state = {
    playerSelected: false,
    battleLocation : 'galv-dwn'
  }
  onPlayerSelect =(playerId)=>{
    console.log(`Selected Player : ${playerId} ` ) ;
    this.setState({playerSelected: playerId})
  }
  render(){
    if(this.state.playerSelected){
      return(
            <Redirect to =  {{
              pathname: '/BattleQue',
              opponent: this.state.playerSelected,
              battleLocation: this.state.battleLocation
            }}></Redirect>
      )
    }
    return(
      <div className="table-container grid-col-4 grid-row-10">
        <div className="top-row-container col-sz-4 grid-col-4">
          <div className="">Status</div>
          <div className="">Player</div>
          <div className="">Rank</div>
          <div className="">Challenge</div>
        </div>
        <Player playerId={1} playerSelect={(playerId)=>{this.onPlayerSelect(playerId)}}/>
      </div>
    )
  }
}




export default  PlayerList  ;
