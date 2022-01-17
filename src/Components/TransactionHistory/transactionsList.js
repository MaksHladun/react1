import s from './transactions.module.css';
import Transaction from './transactions';

export default function TransactionList({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionRow}>
          <th className={s.transactionHead}>Type</th>
          <th className={s.transactionHead}>Amount</th>
          <th className={s.transactionHead}>Currency</th>
        </tr>
      </thead>
      {items.map(el => (
        <Transaction
          key={el.id}
          type={el.type}
          amount={el.amount}
          currency={el.currency}
        />
      ))}
    </table>
  );
}
