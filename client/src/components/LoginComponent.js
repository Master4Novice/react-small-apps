import React, { Component } from 'react';

class LoginComponent extends Component {
  render() {
    return (
      <div className="container">
         <div className="row">
            <form className="form-inline">
                 <label for="username">Username:&nbsp;</label>
                 <input type="text" className="form-control" id="username"/>
                 <label for="password">&nbsp;Password:&nbsp;</label>
                 <input type="password" className="form-control" id="password"/>
                 <div>&nbsp;</div>
                 <input type="submit" value="Login" className="btn btn-success"/>
            </form> 
         </div>
      </div>
    );
  }
}

export default LoginComponent;