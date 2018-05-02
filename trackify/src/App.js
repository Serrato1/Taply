import React, { Component } from 'react';
import './style/App.css';
import HomeMenu from './components/HomeMenu'
import BattleMenu from './components/BattleMenu'
import Rankings from './components/Rankings'
import TopNav from './components/TopNav'
import PlayerSelect from './components/PlayerSelect'
import BattleQue from './components/BattleQue'




import LocationSelection from './components/LocationSelection'
import {Router} from 'react-router'
import {Route} from 'react-router-dom'
import createBrowserHistory   from 'history/createBrowserHistory'
const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history =  {history}>
        <div>
        <div className="header2">
        </div>
        <TopNav />
          <div>
              <Route exact path="/" render={()=>{return <HomeMenu />}} />
              <Route exact path="/BattleMenu" render={()=>{return <BattleMenu />}} />
              <Route exact path="/Rankings" render={()=>{return <Rankings />}} />

              <Route exact path='/BattleSelection' component= {PlayerSelect} />
              <Route exact path='/LocationSelection' component= {LocationSelection} />
              <Route exact path='/BattleQue' component=  {BattleQue} />

          </div>



        </div>
        </Router>
    );
  }
}

export default App;
