import React from "react";
import TableRow from "../TableRow/TableRow";
import TableHead from "../TableHead/TableHead";
import styles from "../Transactions/Transactions.module.css";
import PropTypes from "prop-types";

const Transactions = ({ items }) => {
  return (
    <table className={styles.table}>
      <TableHead />

      <tbody className={styles.table__body}>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow type={type} amount={amount} currency={currency} key={id} />
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
