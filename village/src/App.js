import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  load = data => {
    this.setState({smurfs: data})
  }

  //get data from server
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(res => this.load(res.data))
      .catch(err => console.log(err))
    }

  //post new smurf
  postSmurf = smurf => {
    console.log("Posted New", smurf);

    axios.post("http://localhost:3333/smurfs", smurf)
      .then(res => this.load(res.data))
      .catch(err => console.log(err))
    }

  // delete smurf - stretch 
  deleteSmurf = id => {
    console.log("Delete", id);

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.load(res.data))
      .catch(err => console.log(err))
    }
  // update smurf - stretch 
  updateSmurf = smurf => {

    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => this.load(res.data))
      .catch(err => console.log(err))
  }


  render() {
    console.log("server", this.state);

    return (
      <div className="App">
      <div className="nav-bar">
        <NavLink exact to="/" activeClassName="activeNavLink">Home</NavLink>
        <NavLink to="/smurf-form" activeClassName="activeNavLink">Add Smurfs</NavLink>
      </div>

        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} updateSmurf={this.updateSmurf}/>} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />} />
      </div>
    );
  }
}

export default App;
