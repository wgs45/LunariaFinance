import React from "react";
import "@styles/globals.css";

export default function Dashboard() {
  return (
    <div className="container">
      <h1 className="text-3xl">Lunaria Finance</h1>
      <div>
        <h4>Your Balance: </h4>
        <h1 className="text-3xl">$0.00</h1>

        <div className="inc-exp-container">
          <div className="flex-1 text-center border-r border-[#dedede]">
            <h4>Income</h4>
            <p className="money plus">+$0.00</p>
          </div>
        </div>
        <div className="flex-1 text-center">
          <h4>Expense</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>

      <h3 className="">History</h3>
      <ul className=""></ul>

      <h3>Add new transaction</h3>
      <div className="">
        <label>Text</label>
        <input type="text" placeholder="Enter text..." />
      </div>
      <div className="">
        <label>
          Amount <br /> (negative - expense, positive - income)
        </label>
      </div>
      <button>Add transaction</button>
    </div>
  );
}
