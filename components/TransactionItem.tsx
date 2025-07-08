import React from "react";

export interface Transaction {
  id: number;
  text: string;
  amount: number;
  onRemove: (e: number) => void;
}

export const TransactionItem: React.FC<{ transaction: Transaction }> = ({
  transaction,
}) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const amountClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={`list ${amountClass}`}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => transaction.onRemove(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
