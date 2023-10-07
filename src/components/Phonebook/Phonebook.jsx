import { useState } from 'react';
import css from './Phonebook.module.css';

export const Phonebook = ({ handleAddContact }) => {
  const [nameState, setNameState] = useState('');
  const [numberState, setNumberState] = useState('');
  const [errorState, setErrorState] = useState(false);

  const handleNumberChange = event => {
    setNumberState(event.target.value);
  };
  const handleNameChange = event => {
    setNameState(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      name: nameState,
      number: Number.parseInt(numberState),
    };
    if (isNaN(contactData.number)) {
      return setErrorState('Please write number');
    }
    handleAddContact(contactData);
    setNameState('');
    setNumberState('');
    setErrorState(false);
  };

  return (
    <form onSubmit={handleSubmit} className={css.phonebookContainer}>
      <label className={css.phonebookLabel}>
        <span className={css.phonebookText}>Name</span>
        <input
          className={css.phonebookInput}
          onChange={handleNameChange}
          value={nameState}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookLabel}>
        <span className={css.phonebookText}>Number</span>
        {errorState && (
          <span className={css.phonebookTextError}>{errorState}</span>
        )}
        <input
          className={css.phonebookInput}
          onChange={handleNumberChange}
          value={numberState}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.phonebookBtn}>
        Add contact
      </button>
    </form>
  );
};
