import PropTypes from 'prop-types';
import css from './friendList.module.css';

export default function Friend({ id, avatar, name, isOnline }) {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.status : css.statusOff}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};