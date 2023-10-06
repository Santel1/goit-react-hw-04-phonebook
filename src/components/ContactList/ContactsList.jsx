import { ContactItem } from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

import css from './ContactList.module.css';
export const ContactsList = ({ filteredContacts, handleDeleteContacts }) => {
  return (
    <div className={css.contactsListContainer}>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => {
          return (
            <ContactItem
              key={nanoid()}
              name={contact.name}
              number={contact.number}
              handleDeleteContacts={handleDeleteContacts}
            />
          );
        })}
      </ul>
    </div>
  );
};
