"use client";
import React, { useState, useEffect } from "react";
import { Transaction, TransactionItem } from "@components/TransactionItem";
import { TransactionForm } from "@components/TransactionForm";

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (text: string, amount: number) => {
    const newTransactions: Transaction = {
      id: Date.now(),
      text,
      amount,
      onRemove: removeTransaction,
    };
    setTransactions((prev) => [...prev, newTransactions]);
  };

  const removeTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const amount = transactions.map((t) => t.amount);
  const total = amount.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amount
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amount.filter((a) => a < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  return (
    <div className="container">
      <h1 className="text-2xl tracking-widest">Lunaria Finance</h1>
      <h4>Your Balance: </h4>
      <h1 className="text-3xl">${total}</h1>
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
      <h3>History</h3>
      <ul className="list">
        {transactions.map((tx) => (
          <TransactionItem
            key={tx.id}
            transaction={{ ...tx, onRemove: removeTransaction }}
          />
        ))}
      </ul>
      <h3>Add new transaction</h3>
      <TransactionForm onAdd={addTransaction} />
    </div>
  );
}
