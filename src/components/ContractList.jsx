import { useState } from "react";

import contactsData from "../contacts.json";
const firstFive = contactsData.slice(0, 6);
const remainingContacts = contactsData.slice(6, contactsData.length);

function getRandomContact(remainingContacts) {
  let randomindex = Math.floor(Math.random() * remainingContacts.length);

  let elementToReturn = remainingContacts[randomindex];

  remainingContacts.splice(randomindex, 1); // remove the element from the array

  return elementToReturn;
}

function ContactList() {
  const [contacts, setContacts] = useState(firstFive);

  function sortContactsByName() {
    let copicat = contacts.slice();
    copicat.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(copicat);
  }

  function sortContactsByPop() {
    let copicat = contacts.slice();
    copicat.sort((a, b) => b.popularity - a.popularity);

    setContacts(copicat);
  }

  const deleteContact = (contactID) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactID;
    });

    setContacts(filteredContacts);
  };

  return (
    <div>
      <h2>Contract List</h2>

      <button onClick={() => sortContactsByPop()}>Sort by Pop</button>

      <button onClick={() => sortContactsByName()}>Sort by Name</button>

      <button
        onClick={() =>
          setContacts((prevContacts) => [
            ...prevContacts,
            getRandomContact(remainingContacts),
          ])
        }
      >
        Add Random Contact
      </button>
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="ContactCard">
            <img src={contact.pictureUrl}></img>
            <p>Name: {contact.name}</p>
            <p>Popularity: {contact.popularity}</p>
            <p>Won Oscar: {contact.wonOscar && <span>🏆</span>}</p>
            <p>Won Emmy: {contact.wonEmmy && <span>🏆</span>}</p>

            <button
              onClick={() => deleteContact(contact.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
