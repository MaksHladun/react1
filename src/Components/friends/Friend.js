import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ url, name, activ, id }) {
  const isEctiv = activ === true ? s.activ : s.notActiv;

  return (
    <li id={id} className={s.item}>
      <span className={isEctiv}></span>
      <img className={s.avatar} src={url} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  activ: PropTypes.bool,
  id: PropTypes.number,
};
