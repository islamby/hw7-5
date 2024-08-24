import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === index ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Управление контактами</h1>
      <Form addContact={addContact} />
      <List 
        contacts={contacts} 
        deleteContact={deleteContact} 
        editContact={editContact} 
      />
    </div>
  );
}

export default App;
