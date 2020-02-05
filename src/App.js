import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TileList from './components/TileList/TileList';
import GameDetails from './components/Game-details/GameDetails';
import { BrowserRouter as Router, Route} from 'react-router-dom'



export class App extends Component {
  constructor(){
    super()
    this.state={
      boardgames: []
    }
  }

  componentDidMount(){
    fetch('https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=DsFytjlJHb')
      .then(response => response.json())
        .then(games=>this.setState({boardgames:games.games}))
  }
  render() {
    //console.log(this.state.boardgames)
    const { boardgames } = this.state
      
    return (
      <Router>
        <Route exact path='/'>
      <div className='App'>
       <h1>BOARDGAME-PEDIA</h1>
       <TileList key={boardgames.id} boardgames={boardgames}/>
      </div>
      </Route>
      <Route 
        path='/GameDetails' 
        component={GameDetails}> 
        <GameDetails key={boardgames.id} boardgames={boardgames} />
      </Route>
      </Router>
    )
  }
}

export default App

