import React, {Component} from 'react'
import PlayerList from './PlayerList'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
class PlayerSelect extends Component {
  render(){
    if(this.props.location.query){
      let query = this.props.location.query;
      console.log("Player Select Props: ",query)
      return(
        <div className="grid-col-1">
          <h2 className="item-center">GAME MODE - {query.battleType.toUpperCase()} </h2 >
          <div className="item-center">Challenge A Player!</div><br />
          <div className="ranking">
            <PlayerList />
          </div>
        </div>
      )
    }else{
      <Redirect  to="/BattleMenu" > </Redirect     >
      return(
        <div>
          Please Choose Match Type !<br/>
          <Link to="/BattleMenu">Go Back</Link>
        </div>
      )
    }

  }
}




export default  PlayerSelect  ;
