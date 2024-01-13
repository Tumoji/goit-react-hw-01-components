import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const generateRandomColor = () => {
  const saturation = 10 + Math.random() * 1;
  const lightness = 40 + Math.random() * 30;

  return `hsl(${Math.random() * 360}, ${saturation}%, ${lightness}%)`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats:</h2>}

      <ul className={styles.statList}>
        {stats.map(stats => {
          return (
            <li
              className={styles.item}
              key={stats.id}
              style={{ backgroundColor: generateRandomColor() }}
            >
              <span className={styles.label}>{stats.label}</span>
              <span className={styles.percentage}>{stats.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default Statistics;
