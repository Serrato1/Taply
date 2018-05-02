import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class BattleMenu extends Component{
  render(){
    return(
      <div className="PlayerOptions">
        <div className="screen-option grid-col-1">
          <div className="item-center">
            <Link to={{
            pathname : '/BattleSelection',
            query : {
              battleType : 'fun'
            }
          }} className="no-style color-black">FOR FUN!</Link></div>
        </div>
        <div className="screen-option-red grid-col-1">
          <div className="item-center">
            <Link to={{
            pathname : '/BattleSelection',
            query : {
              battleType : 'glory'
            }
          }} className="no-style color-white">FOR GLORY!</Link></div>
        </div>
      </div>
    )
  }
}


export default BattleMenu;
