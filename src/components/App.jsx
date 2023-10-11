// import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([getItems()]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function getItems() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const contacts = JSON.parse(savedContacts);
      return contacts;
    }
    return [];
  }

  // const addContact = ({ name, number }) => {
  //   const { contacts } = useState;
  //   const isExist = contacts.find(contact => {
  //     return contact.name.toLowerCase() === name.toLowerCase();
  //   });
  //   if (isExist) {
  //     alert(`${name} is Exist`);
  //     return;
  //   }
  //   const newContact = { name, number, id: nanoid() };
  //   setContacts(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };

  const addContact = contact => {
    const newContact = { ...contact, id: nanoid() };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is Exist`);
      return;
    }
    setContacts(prevState => [...prevState.contacts, newContact]);
  };

  const deletContact = contactId => {
    setContacts(contacts.filter(contact => contactId !== contactId));
  };

  // chanchFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  const chanchFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const contactsFilter = () => {
  //   setFilter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const contactsFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const test = contactsFilter();
  console.log(test);
  return (
    <Layout>
      <Form addContact={addContact} />
      <Filter value={filter} onChange={chanchFilter} />
      <ContactList contacts={contacts} onDelete={deletContact} />
      <GlobalStyle />
    </Layout>
  );
};
