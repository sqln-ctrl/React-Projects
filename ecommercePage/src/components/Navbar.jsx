function Navbar () {
     return (
        <nav className="flex justify-between items-center sticky top-0  p-4 
        shadow-lg z-10 font-bold text-black rounded-lg 
        ">
            <div className="flex items-center">
                <h1>My E-commerce Store</h1>
            </div>

            
            <input className="w-96 border border-black p-1.5 rounded-lg" type="text" placeholder="Search products..." />
            

            <div className="flex items-center gap-3">
                  <button className="border border-5 border-solid border-text-black hover:bg-black hover:text-white p-2 rounded-lg w-24">Login</button>
                  <button className="border border-5 border-solid border-text-black hover:bg-black hover:text-white p-2 rounded-lg w-24">Signup</button>   
            </div>
        </nav>
     )
}

export default Navbar;