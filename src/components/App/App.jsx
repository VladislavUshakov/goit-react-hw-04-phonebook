import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Section, Title } from './App.styles';
import * as LS from 'services/localStorageApi';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: LS.getContacts() });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      LS.setContacts(this.state.contacts);
    }
  }

  addContact = (newContact, { resetForm }) => {
    const { contacts } = this.state;

    const isNewContact = !contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isNewContact) {
      Report.failure(`${newContact.name} is already in contacts`, '', 'Okey', {
        position: 'center-bottom',
      });
      return;
    }

    this.setState(({ contacts: currentContacts }) => ({
      contacts: [{ ...newContact, id: nanoid() }, ...currentContacts],
    }));

    resetForm();
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  updateFilterValue = value => {
    this.setState({ filter: value });
  };

  toFilterContactsForName = () => {
    const { contacts, filter } = this.state;

    if (contacts.length > 0) {
      return contacts.filter(({ name }) => {
        const text = name.toLowerCase();
        const filterText = filter.toLowerCase();
        return text.includes(filterText);
      });
    } else {
      return [];
    }
  };

  render() {
    const { filter } = this.state;
    const { title } = this.props;
    const contacts = this.toFilterContactsForName();

    return (
      <Section>
        <Title>{title}</Title>
        <ContactForm onSubmit={this.addContact} />
        <Filter onChange={this.updateFilterValue} value={filter} />
        <ContactList contacts={contacts} toDeleteContact={this.deleteContact} />
      </Section>
    );
  }
}
