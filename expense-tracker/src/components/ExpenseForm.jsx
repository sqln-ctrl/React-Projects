import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount, date, id: Date.now() });
    setTitle(""); setAmount(""); setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;