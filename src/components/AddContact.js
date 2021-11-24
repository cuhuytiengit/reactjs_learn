import React from "react";


class AddContact extends React.Component {

    state = {
        account:"",
        password:"",

    }
       add = (e) =>{
           e.preventDefault();
           if(this.state.account==="" && this.state.password ===""){
               
           }
       }
      render() {
          return (
              <div className = "ui main">
                  <h2>Add Contact</h2>
                  <form className = "ui form" onSubmit ={this.add}>
                      <div className = 'field'>
                          <label>Account Name</label>
                          <input type = "text"
                           name = "account" 
                           placeholder = "Account" 
                           value = {this.state.account}
                           onChange ={ (e) => this.setState({account:e.target.value})}></input>
                      </div>
                      <div className = 'field'>
                          <label>PassWord</label>
                          <input type = "text" 
                          name = "password"
                         placeholder = "Password"
                         value = {this.state.password}
                         onChange ={ (e) => this.setState({password:e.target.value})}></input>
                      </div>
                      <button className = "ui button green">Add</button>
                  </form>
              </div>
          );
      }
}

export default AddContact;