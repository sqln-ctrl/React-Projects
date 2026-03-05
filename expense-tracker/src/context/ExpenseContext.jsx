import { createContext, useState } from "react";

// 1️⃣ Create Context
export const ExpenseContext = createContext();

// 2️⃣ Provider Component
function ExpenseProvider({ children }) {
  // Expenses state
  const [expenses, setExpenses] = useState([]);

  // Add new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Optional: Delete expense (if needed)
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

// 3️⃣ Export Provider as default
export default ExpenseProvider;