import { ContactsList } from 'components/ContactList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contactsState, setContactsState] = useState([]);
  const [filterState, setFilterState] = useState('');

  useEffect(() => {
    const stringifyContacts = JSON.stringify(contactsState);
    localStorage.setItem('contacts', stringifyContacts);
  }, [contactsState]);

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    setContactsState(parsedContacts);
  }, []);

  const handleAddContact = contactData => {
    if (contactsState.some(contact => contact.name === contactData.name)) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    setContactsState(prevState => {
      return [...prevState, contactData];
    });
  };

  const handleFilterChange = event => {
    setFilterState(event.target.value);
  };

  const handleDeleteContacts = contactName => {
    setContactsState(prevState => {
      return prevState.filter(contact => contact.name !== contactName);
    });
  };

  const filteredContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <div>
      <Title>Phonebook</Title>
      <Phonebook handleAddContact={handleAddContact} />
      <Title>Contacts</Title>
      <Filter filter={filterState} onFilterChange={handleFilterChange} />
      <ContactsList
        filteredContacts={filteredContacts}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
};
