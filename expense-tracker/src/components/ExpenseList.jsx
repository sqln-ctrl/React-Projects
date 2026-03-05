import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
      ))}
    </div>
  );
}

export default ExpenseList;