import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Navbar from '../components/Navbar';
import Filter from "../components/Filter";

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <ExpenseForm />
      <Filter/>
      <ExpenseList />
    </div>
  );
}

export default Dashboard;