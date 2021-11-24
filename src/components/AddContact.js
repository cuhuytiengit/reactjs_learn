import React from "react";


class AddContact extends React.Component {
      render() {
          return (
              <div className = "ui main">
                  <h2>Add Contact</h2>
                  <form className = "ui form">
                      <div className = 'field'>
                          <label>Account Name</label>
                          <input type = "text" name = "account" placeholder = "Account"></input>
                      </div>
                      <div className = 'field'>
                          <label>PassWord</label>
                          <input type = "text" name = "account" placeholder = "Account"></input>
                      </div>
                      <button className = "ui button green">Add</button>
                  </form>
              </div>
          );
      }
}

export default AddContact;