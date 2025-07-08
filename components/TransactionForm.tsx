import React, { useState } from "react";

interface Props {
  onAdd: (text: string, amount: number) => void;
}

export const TransactionForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "")
      return alert("Please fill in both fields!");

    onAdd(text, parseFloat(amount));
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label>Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
      />
      <label>
        Amount <br />
        (negative - expense, positive - income)
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount..."
      />
      <button type="submit" className="btn mt-4">
        Add transaction
      </button>
    </form>
  );
};
