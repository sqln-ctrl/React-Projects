import {Link} from 'react-router-dom';

function Navbar () {
     return (
        <nav className="flex justify-between items-center sticky top-0 p-6
        shadow-lg z-10 font-bold text-black rounded-lg bg-purple-400">
            
            <div className="flex items-center">
                <h1 className="text-xl text-white hover:text-purple-950">E-commerce Store</h1>
                <Link to="/" className='font-light ml-10 text-white hover:text-purple-950'>Home</Link>
                <Link to="/products" className='font-light ml-10 text-white hover:text-purple-950'>Products</Link>
                <Link to="/cart" className='font-light ml-10 text-white hover:text-purple-950'>Cart</Link>
                <Link to="/check" className='font-light ml-10 text-white hover:text-purple-950'>Checkout</Link>
            </div>
          
             
            <input className="w-96 border border-solid p-1.5 rounded-lg bg-white" type="text" placeholder="Search products..." />
            
            <div className="flex items-center gap-3">
                  <Link to="/login"><button className="border-2 border-solid border-black bg-white hover:bg-purple-950 hover:text-white p-1 rounded-lg w-24">Login</button></Link>
                  <Link to="/signup"><button className="border-2 border-solid border-black bg-white hover:bg-purple-950 hover:text-white p-1 rounded-lg w-24">Signup</button>   </Link>
            </div>
        </nav>
     )
}

export default Navbar;