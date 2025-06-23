import React from "react";
import "@styles/globals.css";

export default function Dashboard() {
  return (
    <div className="">
      <h1 className="">Lunaria Finance</h1>
      <div className="">
        <h4 className="">Your Balance: </h4>
        <h1 className="">$0.00</h1>

        <div className="">
          <div className="">
            <h4 className="">Income</h4>
            <p className="">+$0.00</p>
          </div>
        </div>
        <div className="">
          <h4 className="">Expense</h4>
          <p className="">-$0.00</p>
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
