import Button from "../ui/Button";
function Hero () {
    return (
        <div className="hero-section">
            <h1 className="headline">Manage Work Smarter with AI Automation</h1>
            <p className="subheadline">TaskFlow AI helps remote teams organize tasks automate workflows  and increase productivity by 40%</p>

            <div className="hero-buttons">
               <Button
                    type="primary"
                    button="Start Free Trial"
                />
               <Button
                   type="secondary"
                   button="Watch Demo"
                />
            </div>
        </div> 
        
    );
}

export default Hero;