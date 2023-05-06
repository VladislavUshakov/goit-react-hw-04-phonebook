import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Section, Title } from './App.styles';
import * as LS from 'services/localStorageApi';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const App = ({ title }) => {
  const [contacts, setContacts] = useState(() => LS.getContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    LS.setContacts(contacts);
  }, [contacts]);

  const addContact = (newContact, { resetForm }) => {
    const isNewContact = !contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isNewContact) {
      Report.failure(`${newContact.name} is already in contacts`, '', 'Okey', {
        position: 'center-bottom',
      });
      return;
    }

    setContacts(prevContacts => [
      { ...newContact, id: nanoid() },
      ...prevContacts,
    ]);
    resetForm();
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const updateFilterValue = value => setFilter(value);

  const filteredContacts =
    contacts.length > 0
      ? contacts.filter(({ name }) => {
          const text = name.toLowerCase();
          const filterText = filter.toLowerCase();
          return text.includes(filterText);
        })
      : [];

  return (
    <Section>
      <Title>{title}</Title>
      <ContactForm onSubmit={addContact} />
      <Filter onChange={updateFilterValue} value={filter} />
      <ContactList
        contacts={filteredContacts}
        toDeleteContact={deleteContact}
      />
    </Section>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};
