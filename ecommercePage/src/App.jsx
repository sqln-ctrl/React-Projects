import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
function App() {
    return(
         <Navbar />
    )
//    <Router>
//        <Routes>
//            <Route>Home</Route>
//            <Route>Product Detail</Route>
//            <Route>Cart Page</Route>
//            <Route>Checkout</Route>
//            <Route>Payment</Route>
//            <Route>Order Success</Route>
//        </Routes>
//    </Router>
}

export default App;