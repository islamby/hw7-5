import React, { useState } from 'react';

function List({ contacts, deleteContact, editContact }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    setNewName(contacts[index].name);
    setNewPhone(contacts[index].phone);
  };

  const handleSave = (index) => {
    editContact(index, { name: newName, phone: newPhone });
    setIsEditing(null);
  };

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {isEditing === index ? (
            <>
              <input 
                type="text" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
              />
              <input 
                type="text" 
                value={newPhone} 
                onChange={(e) => setNewPhone(e.target.value)} 
              />
              <button onClick={() => handleSave(index)}>Сохранить</button>
            </>
          ) : (
            <>
              {contact.name} - {contact.phone}
              <button onClick={() => handleEdit(index)}>Редактировать</button>
              <button onClick={() => deleteContact(index)}>Удалить</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
