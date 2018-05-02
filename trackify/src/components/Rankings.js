import React,{Component} from 'react';
import axios from 'axios'

class Rankings extends Component{
  state ={
    allPlayers :  []
  }




  componentWillMount(){
    axios('http://localhost:8000/players')
    .then(({data})=>{
      console.log('recieved all players : ', data);
      this.setState({allPlayers :  data})
    })
  }
  render(){
    let rankingList = this.state.allPlayers.map((player, indx)=>{
      return    <div key={indx} className="col-sz-3 grid-col-3">
                  <div className="">{player.user_name}</div>
                  <div className="">{player.win} : {player.loss}</div>
                  <div className="">{player.id}</div>
                </div>
    })
    return(
      <div className="ranking">
        <h2>RANKINGS</h2>
        <div className="table-container grid-col-3 grid-row-10">
          <div className="top-row-container col-sz-3 grid-col-3">
            <div className="">Name</div>
            <div className="">Win / Loss</div>
            <div className="">Rank</div>
          </div>
          {rankingList}
        </div>
      </div>
    )
  }
}


export default Rankings;
