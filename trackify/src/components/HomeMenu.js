import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class HomeMenu extends Component{
  render(){
    return(
      <div className="HomeMenu">
        <div className="screen-option grid-col-1">
          <div className="item-center"><Link to="/BattleMenu" className="no-style" style={{color:'black'}}>Battle!</Link></div>
        </div>
        <div className="screen-option-blue grid-col-1">
          <div className="item-center"><Link to="/Rankings" className="no-style" style={{color:'white'}}>RANKINGS!</Link></div>
        </div>
      </div>
    )
  }
}


export default HomeMenu;
