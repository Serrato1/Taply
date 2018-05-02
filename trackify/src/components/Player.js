import React, {Component} from 'react'

class Player extends Component{
    onPlayerClick = ()=>{
      let playerId = this.props.playerId;
      this.props.playerSelect(playerId);
    }
    render(){
      return(
        <div className="col-sz-4 grid-col-4">
          <div className="">online</div>
          <div className="">Noel</div>
          <div className="">2</div>
          <div className="" onClick={this.onPlayerClick}>invite</div>
        </div>
      )
    }
}




export default Player  ;
