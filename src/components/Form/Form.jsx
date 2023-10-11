import { useState } from 'react';
// import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import { NameLabel, Input } from './Form.styled';

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

export const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setName({ [name]: value });
  // };
  const handleInputChange = e => {
    const { name, number } = e.target;
    switch ((name, number)) {
      case name:
        'name';
        break;
      case number:
        'number';
      default:
        break;
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    reset();
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <NameLabel>
        Name:
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </NameLabel>
      <NameLabel>
        Number:
        <Input
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </NameLabel>
      <button type="submit">
        <GoSearch size="40px" />
      </button>
    </form>
  );
};
