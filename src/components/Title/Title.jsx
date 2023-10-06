import css from './Title.module.css';
export const Title = props => {
  return (
    <div className={css.titleContainer}>
      <span className={css.title}>{props.children}</span>
    </div>
  );
};
