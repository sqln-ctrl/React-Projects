import Button from '../ui/Button';
function Pricing () {
    return(
        <div className="Pricing">
            <h1>Pricing</h1>
            <div className="plans">
                <div className="basic">
                    <p><a href="#">Basic — $9/month</a></p>
                    <Button type="secondary" button="Choose Plan"/>
                </div>
                <div className="pro">
                    <p><a href="#">Pro — $29/month</a></p>
                    <Button type="secondary" button="Choose Plan"/>
                </div>
                <div className="enterprise">
                    <p><a href="#">Enterprise — Custom Pricing</a></p>
                    <Button type="secondary" button="Choose Plan"/>
                </div>
                
            </div>     
        </div>
    ); 
}

export default Pricing;