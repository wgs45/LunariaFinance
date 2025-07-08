// Tells Next.js this component should run on the client (not server-rendered)
"use client";

import React, { useState, useEffect } from "react";

// Import types and components
import { Transaction, TransactionItem } from "@components/TransactionItem";
import { TransactionForm } from "@components/TransactionForm";

export default function Dashboard() {
  // Store all transactions in state
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load saved transactions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add new transaction to state
  const addTransaction = (text: string, amount: number) => {
    const newTransactions: Transaction = {
      id: Date.now(), // unique timestamp ID
      text,
      amount,
      onRemove: removeTransaction, // add removal logic
    };
    setTransactions((prev) => [...prev, newTransactions]);
  };

  // Remove transaction by ID
  const removeTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // Prepare data to show totals
  const amount = transactions.map((t) => t.amount); // all amounts
  const total = amount.reduce((acc, val) => acc + val, 0).toFixed(2); // total balance
  const income = amount
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amount.filter((a) => a < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  return (
    <div className="container">
      {/* App Header */}
      <h1 className="text-2xl tracking-widest">Lunaria Finance</h1>

      {/* Current balance */}
      <h4>Your Balance: </h4>
      <h1 className="text-3xl">${total}</h1>

      {/* Income vs Expense block */}
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>

      {/* Transaction history list */}
      <h3>History</h3>
      <ul className="list">
        {transactions.map((tx) => (
          <TransactionItem
            key={tx.id}
            transaction={{ ...tx, onRemove: removeTransaction }}
          />
        ))}
      </ul>

      {/* Add new transaction form */}
      <h3>Add new transaction</h3>
      <TransactionForm onAdd={addTransaction} />
    </div>
  );
}
