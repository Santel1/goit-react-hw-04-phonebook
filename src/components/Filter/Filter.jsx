import css from './Filter.module.css';
export const Filter = ({ filter, onFilterChange }) => (
  <label className={css.filterContainer}>
    <input
      type="text"
      className={css.filterInput}
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts"
    />
  </label>
);
