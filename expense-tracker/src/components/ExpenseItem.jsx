// import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <h4>{title}</h4>
      <p>Rs {amount}</p>
      <p>{date}</p>
    </div>
  );
}

export default ExpenseItem;