import { Component } from 'react';
import css from './Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
    error: false,
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      name: this.state.name,
      number: Number.parseInt(this.state.number),
    };
    if (isNaN(contactData.number)) {
      return this.setState({
        error: 'Please write number',
      });
    }
    this.props.handleAddContact(contactData);
    this.setState({
      name: '',
      number: '',
      error: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.phonebookContainer}>
        <label className={css.phonebookLabel}>
          <span className={css.phonebookText}>Name</span>
          <input
            className={css.phonebookInput}
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.phonebookLabel}>
          <span className={css.phonebookText}>Number</span>
          {this.state.error && (
            <span className={css.phonebookTextError}>{this.state.error}</span>
          )}
          <input
            className={css.phonebookInput}
            onChange={this.handleInputChange}
            value={this.state.number}
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
  }
}
