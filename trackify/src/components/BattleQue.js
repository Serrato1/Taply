import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class BattleQue extends Component{
  state = {
    matchFound : false
  }
  render(){
    let opponent = this.props.location.opponent;
    let battleLocation = this.props.location.battleLocation;
    setTimeout(function(){
      axios('http://localhost:8000/battleQueue')
      .then(({data}) =>{
        console.log('BattleQue: ',data);
      })
    }, 3000);

    return(
      <div className="grid-col-1 ">
        <h2 className="item-center">Battle Queue <br/><br />@ {battleLocation}</h2>
        <h4 className="item-center">{opponent ? <div>Waiting For Response From {opponent}</div> : <div>No Opponent Selected<br/><Link to="/BattleMenu" className="text-center">Go Back</Link></div>}</h4>
      </div>
    )
  }
}


export default BattleQue;
