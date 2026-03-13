function Navbar () {
    return(
        <div className="navbar"> 
            <h3 className="logo">TaskFlow AI</h3>
            <div className="links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Login</a></li>
            </div>
            <button>Start Free Trial</button>
        </div>
    );
}

export default Navbar;