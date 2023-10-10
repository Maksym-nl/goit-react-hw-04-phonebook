import {
  List,
  ListItem,
  NameItem,
  ContactItem,
  BtnItem,
} from './Contactlist.styled';
import { ImCross } from 'react-icons/im';
export function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {' '}
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <NameItem color="blue">{contact.name}</NameItem>
          <ContactItem color="green">{contact.number}</ContactItem>
          <BtnItem onClick={() => onDelete(contact.id)}>
            Удалить
            <ImCross />
          </BtnItem>
        </ListItem>
      ))}{' '}
    </List>
  );
}
