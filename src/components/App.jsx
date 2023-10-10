// import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(getItems());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(contacts));
  }, [contacts]);

  function getItems() {
    const savedContacts = localStorage.getItem('id');
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
    const newContact = { ...contacts, id: nanoid() };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is Exist`);
      return;
    }
    setContacts(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  const deletContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
    // chanchFilter = e => {
    //   this.setState({ filter: e.currentTarget.value });
    // };

    const chanchFilter = ({ currentTarget }) => {
      setFilter(currentTarget.value);
    };
    // contactsFilter = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );
    const contactsFilter = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };
  
 
    // render() {
    //   const { filter } = this.state;

    // const filtredContacts = contactsFilter();
    return (
      <Layout>
        <Form addContact={addContact} />
        <Filter value={filter} onChange={chanchFilter} />
        <ContactList contacts={filtredContacts} onDelete={deletContact} />
        <GlobalStyle />
      </Layout>
);
    };
  

