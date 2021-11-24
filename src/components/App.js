import React from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id:"1",
      'name':'tien',
      'email':'cuhuytien',
    },
    {
      id:"2",
      'name':'manh',
      'email':'cuhuytien123',
    }
  ];
  return (
      <div className ='ui container'>
        <Header/>
   
        <AddContact/>

        <ContactList contacts ={contacts}/>

      </div>
  );
}

export default App;
