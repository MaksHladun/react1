import s from './transactions.module.css';
import PropTypes from 'prop-types';

export default function Transaction({ type, amount, currency }) {
  return (
    <tbody>
      <tr className={s.transactionRow}>
        <td className={s.transactionCol}>{type}</td>
        <td className={s.transactionCol}>{amount}</td>
        <td className={s.transactionCol}>{currency}</td>
      </tr>
    </tbody>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
