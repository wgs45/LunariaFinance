import React from "react";

// TypeScript interface to define the structure of a single transaction
export interface Transaction {
  id: number; // unique ID of the transaction
  text: string; // description of the transaction
  amount: number; // amount (can be positive/income or negative/expense)
  onRemove: (e: number) => void; // function to call when removing a transaction (accepts id)
}

// Functional component that accepts a prop named "transaction"
export const TransactionItem: React.FC<{ transaction: Transaction }> = ({
  transaction,
}) => {
  // Determine whether it's income or expense based on the amount
  const sign = transaction.amount < 0 ? "-" : "+"; // display - or +
  const amountClass = transaction.amount < 0 ? "minus" : "plus"; // CSS class for styling

  return (
    <li className={`list ${amountClass}`}>
      {/* Show the transaction text (like "Groceries") */}
      {transaction.text}{" "}
      {/* Show the amount with correct sign and absolute value */}
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      {/* Delete button triggers the onRemove function, passing the ID */}
      <button
        className="delete-btn"
        onClick={() => transaction.onRemove(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
