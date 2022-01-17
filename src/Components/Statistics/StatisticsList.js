import s from './Statistics.module.css';
import Statistic from './Statistics';

export default function StatisticList({ item }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.list}>
        {item.map(elem => (
          <Statistic
            key={elem.id}
            label={elem.label}
            percentage={elem.percentage}
            id={elem.id}
            color={elem.color}
          />
        ))}
      </ul>
    </section>
  );
}
