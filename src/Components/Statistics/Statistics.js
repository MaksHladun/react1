import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistic({ label, percentage, id, color }) {
  return (
    <li id={id} className={s.item} style={{ backgroundColor: color }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
