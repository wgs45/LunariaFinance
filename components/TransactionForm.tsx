import React, { useState } from "react";

// Interface to define the type of props the component accepts
interface Props {
  onAdd: (text: string, amount: number) => void;
  // This means the component expects a function as a prop
  // that takes a string and a number and returns nothing (void)
}

// Functional Component with React.FC<Props> using TypeScript
export const TransactionForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState(""); // state for transaction description
  const [amount, setAmount] = useState(""); // state for amount (as string for now)

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page refresh on form submit

    // Validate that both fields are filled
    if (text.trim() === "" || amount.trim() === "")
      return alert("Please fill in both fields!");

    // Call the passed-in onAdd function with text and parsed number
    onAdd(text, parseFloat(amount));

    // Clear the input fields after submission
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Transaction Text */}
      <label>Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // update state as user types
        placeholder="Enter text..."
      />

      {/* Transaction Amount */}
      <label>
        Amount <br />
        (negative - expense, positive - income)
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // still as string
        placeholder="Enter amount..."
      />

      {/* Submit Button */}
      <button type="submit" className="btn mt-4">
        Add transaction
      </button>
    </form>
  );
};
