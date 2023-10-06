import { ContactsList } from 'components/ContactList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Title } from 'components/Title/Title';
import { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  handleAddContact = contactData => {
    if (
      this.state.contacts.some(contact => contact.name === contactData.name)
    ) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContacts = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== contactName
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <Title>Phonebook</Title>
        <Phonebook handleAddContact={this.handleAddContact} />
        <Title>Contacts</Title>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactsList
          filteredContacts={filteredContacts}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </div>
    );
  }
}
