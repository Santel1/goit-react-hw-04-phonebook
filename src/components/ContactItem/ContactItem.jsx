import css from './ContactItem.module.css';
export const ContactItem = props => {
  return (
    <div className={css.contactItemContainer}>
      <li className={css.contactItem}>
        <span className={css.contactItemText}>{props.name}</span>
        <span className={css.contactItemText}>{props.number}</span>
        <button
          onClick={() => props.handleDeleteContacts(props.name)}
          className={css.contactItemBtn}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
