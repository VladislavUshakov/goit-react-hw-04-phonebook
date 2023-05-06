import { ContactItem } from 'components/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styles';
import { Title } from './ContactList.styles';

export const ContactList = ({ contacts, toDeleteContact }) => {
  const isContacts = contacts.length > 0;
  return (
    <div>
      <Title>Contacts</Title>
      {isContacts ? (
        <List>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}
                toDeleteContact={toDeleteContact}
              />
            );
          })}
        </List>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  toDeleteContact: PropTypes.func.isRequired,
};
