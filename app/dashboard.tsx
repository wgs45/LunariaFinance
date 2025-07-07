import React from "react";

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

      <h3>History</h3>
      <ul className="list">
        {/* sample transaction */}
        <li className="plus">
          Freelance $100
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Coffee $5
          <button className="delete-btn">X</button>
        </li>
      </ul>

      <h3>Add new transaction</h3>
      <div>
        <label>Text</label>
        <input type="text" placeholder="Enter text..." />
      </div>
      <div>
        <label>
          Amount <br /> (negative - expense, positive - income)
        </label>
        <input type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </div>
  );
}
