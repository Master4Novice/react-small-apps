import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AlertContainer from 'react-alert';
import { authenticateUserAction } from '../actions/LoginAction';

class LoginComponent extends Component {
  constructor(){
      super();

      this.state = {username: '', password: ''}
      this.status = "";
      this.user = {username:'', password:''};
      this.alertOptions = {
        offset: 14,
        position: 'top left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      };
      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.showAlert = this.showAlert.bind(this);
  }

  showAlert = (message) => {
    this.msg.show(message, {
      time: 5000,
      type: 'success',
    })
  }
  
  onChangeUserName(e) {
    this.setState({username:e.target.value});
  }

  onChangePassword(e) {
    this.setState({password:e.target.value});
  }

  authenticateUser(){
    
        this.user = {
            username:this.state.username,
            password:this.state.password
        }   
        this.props.authAction(this.user); 
  }

  componentWillReceiveProps(nextProps){
      if(nextProps !== undefined){
        if(nextProps.status === "Failure"){
          this.showAlert(nextProps.status);
        }else{
          this.props.navigateTo('/success');
        }
        console.log(nextProps.status);
      }
  }

  render() {
    return (
      <div className="container">
         <div className="row">
            <div className="col-md-12">
              <div className="row">
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" aria-describedby="basic-addon1" value={this.state.username} onChange={this.onChangeUserName}/>
              </div>
              </div>
              <div className="row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="basic-addon1" value={this.state.password} onChange={this.onChangePassword}/>
              </div>
              </div>
              <div className="row">
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
              <button type="submit" className="btn btn-success" onClick={this.authenticateUser.bind(this)} >Login</button>    
              </div>
            </div>
         </div>
      </div>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
      status:state.LoginAuthReducer.status,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch(push(location))
  },
  authAction : (user) =>{
      dispatch(authenticateUserAction(user));
  }
});

export default connect(state, mapDispatchToProps)(LoginComponent);
