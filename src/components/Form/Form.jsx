import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import { NameLabel, Input } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <NameLabel>
          Name:
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </NameLabel>
        <NameLabel>
          Number:
          <Input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </NameLabel>
        <button type="submit">
          <GoSearch size="40px" />
        </button>
      </form>
    );
  }
}
