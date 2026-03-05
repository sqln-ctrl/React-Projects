import { useState } from "react";
import { filterExpensesByYear } from "../utils/filterByDate";
import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function Filter() {
  const { expense } = useContext(ExpenseContext);
  const [year, selectYear] = useState("");
  const [month, selectMonth] = useState("");

const handleShow = () => {

  const filteredExpenses = filterExpensesByYear(expense, year);

  console.log(filteredExpenses);

};

  return (
    <div className="filter">
      <h2>Filter Expense</h2>
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => selectYear(e.target.value)}
      />

      <input
        type="month"
        placeholder="Month"
        value={month}
        onChange={(e) => selectMonth(e.target.value)}
      />

      <button onClick={handleShow}>Show Expenses</button>
    </div>
  );
}

export default Filter;