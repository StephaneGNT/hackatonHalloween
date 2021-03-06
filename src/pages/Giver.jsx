import React, { Component } from 'react';
import ProfileGiver from '../Components/ProfileGiver';
import GiverInterface from '../Components/GiverInterface';
import '../Styles/giverInterface.css';
import Login from '../Components/Login'

class Giver extends Component {
  constructor(props){
    
    super(props)
    this.state={
      loggedUser:false,
    }
  }

  setLoggedUser=(bool)=>{
    this.setState({
      loggedUser: bool,
    })
  }

  render() {
    return (
      <div>
        <div>{
          this.state.loggedUser ?
          <div className="giverInterface">
            <ProfileGiver/>
            <GiverInterface/>
          </div>
          :
          <Login 
            userStatus = {this.props.userStatus}
            setLoggedUser = {this.setLoggedUser}
            giversArray={this.props.giversArray}
            setLoggedUser={this.setLoggedUser}
          />
        }</div>
      </div>
    );
  }
}

export default Giver;
