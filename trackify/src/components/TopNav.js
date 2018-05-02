import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class TopNav extends Component{
  render(){
    return(
      <div className="navigation-top">
        <div className="col-sz-3 item-center color-white"><Link to='/' className="color-white no-style">PING PONG </Link></div>
        <div className="col-sz-2 item-center color-white"></div>
        <div className="col-sz-2 item-center color-white">LOGIN</div>
      </div>
    )
  }
}


export default TopNav;
