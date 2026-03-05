// utils/filterByDate.js

export function filterExpensesByYear(expense, selectedYear) {
  if (!selectedYear) return expense; // show all if no year
  return expense.filter((exp) => {
    const expenseYear = new Date(exp.date).getFullYear();
    return expenseYear === Number(selectedYear);
  });
}

export function filterExpensesByMonth(expenses, selectedMonth) {
  if (!selectedMonth) return expenses;
  return expenses.filter((exp) => {
    const expenseMonth = new Date(exp.date).getMonth() + 1; // 0-indexed
    return expenseMonth === Number(selectedMonth);
  });
}