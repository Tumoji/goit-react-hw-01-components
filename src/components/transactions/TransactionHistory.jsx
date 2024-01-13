import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const transactionsRef = useRef();

  useEffect(() => {
    if (transactionsRef.current) {
      const totalHeight = Array.from(transactionsRef.current.children).reduce(
        (acc, child) => acc + child.offsetHeight,
        0
      );

      transactionsRef.current.style.height = `${totalHeight}px`;
    }
  }, [items]);

  return (
    <div className={styles.transactionHistoryContainer}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.headSection}>
            <th className={styles.headTable}>Type</th>
            <th className={styles.headTable}>Amount</th>
            <th className={styles.headTable}>Currency</th>
          </tr>
        </thead>
      </table>
      <div className={styles.bodySection} ref={transactionsRef}>
        <table className={styles.transactionHistory}>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className={styles.bodyTable}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                <td className={styles.bodyTable}>{item.amount}</td>
                <td className={styles.bodyTable}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
