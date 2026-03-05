import ExpenseProvider from "./context/ExpenseContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <ExpenseProvider>
           <Dashboard/>
      </ExpenseProvider>
  );
}

export default App;