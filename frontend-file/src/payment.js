// import React from 'react';
// import { Link } from 'react-router-dom';
// import './payment.css';

// function Payment() {
//     return (
//         <div className="Payment">
            // <header>
            //     <div className="container-payment">
            //         <div className="left">
            //             <h3>BILLING ADDRESS</h3>
            //             <form className="payment-form">
                            // <div>
                            //     <label htmlFor="name">Full name</label>
                            //     <input type="text" name="name" placeholder="Enter name" />
                            // </div>
                            // <div>
                            //     <label htmlFor="email">Email</label>
                            //     <input type="text" name="email" placeholder="Enter email" />
                            // </div>
                            // <div>
                            //     <label htmlFor="address">Address</label>
                            //     <input type="text" name="address" placeholder="Enter address" />
                            // </div>
                            // <div>
                            //     <label htmlFor="city">City</label>
                            //     <input type="text" name="city" placeholder="Enter City" />
                            // </div>
                            // <div id="zip">
                            //     <label htmlFor="state">
                            //         State
                            //         <select name="state">
                            //             <option>Choose State..</option>
                            //             <option>Sri Lanka</option>
                            //             <option>India</option>
                            //         </select>
                            //     </label>
                            //     <label htmlFor="zipCode">
                            //         Zip code
                            //         <input type="number" name="zipCode" placeholder="Zip code" />
                            //     </label>
                            // </div>
            //             </form>
            //         </div>
            //         <div className="right">
            //             <h3>PAYMENT</h3>
            //             <form>
                            // Accepted Card <br />
                            // <img src={require("./Assests/img/card1.png")} alt="card1" style={{ width: '20%' }} /><br />
                            // {/* <img src={require("./Assests/img/card2.png")} alt='card2' style={{width:'10%', height:'20%'}}/> */}
                            // <br></br>

                            // Credit card number
                            // <input type="text" name="" placeholder="Enter card number" />
                            // <div id="zip">
                            //     <label htmlFor="expMonth">
                            //         Exp month
                            //         <input type="text" name="expMonth" placeholder="Enter Month" />
                            //     </label>
                            //     </div>
                            //     <div id="zip">
                            //         <label htmlFor="expYear">
                            //             Exp year
                            //             <select name="expYear">
                            //                 <option>Choose Year..</option>
                            //                 <option>2024</option>
                            //                 <option>2025</option>
                            //                 <option>2026</option>
                            //                 <option>2027</option>
                            //                 <option>2028</option>
                            //             </select>
                            //         </label>
                            //         <label htmlFor="cvv">
                            //             CVV
                            //             <input type="number" name="cvv" placeholder="CVV" />
                            //         </label>
                            //     </div>
//                             <Link to="/product" >
//                             <input type="submit" name="" value="Proceed to Checkout" />
//                             </Link>
            //             </form>
            //         </div>
            //     </div>
            // </header>
//         </div>
//     );
// }

// export default Payment;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';

function Payment() {
    const [stripeApiKey, setStripeApiKey] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/payment/sendapi', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${yourAuthTokenHere}`
            }
        })
            .then(response => response.json())
            .then(data => setStripeApiKey(data.stripeApiKey))
            .catch(error => console.error('Error fetching Stripe API key:', error));
    }, []);

    const handlePayment = () => {
    };

    return (
        <div className="Payment">
            <header>
                <div className="container-payment">
                    <div className="left">
                        <h3>BILLING ADDRESS</h3>
                        <form className="payment-form">
                        <div>
                                <label htmlFor="name">Full name</label>
                                <input type="text" name="name" placeholder="Enter name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="Enter email" />
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" placeholder="Enter address" />
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" placeholder="Enter City" />
                            </div>
                            <div id="zip">
                                <label htmlFor="state">
                                    State
                                    <select name="state">
                                        <option>Choose State..</option>
                                        <option>Sri Lanka</option>
                                        <option>India</option>
                                    </select>
                                </label>
                                <label htmlFor="zipCode">
                                    Zip code
                                    <input type="number" name="zipCode" placeholder="Zip code" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="right">
                        <h3>PAYMENT</h3>
                        <form>
                        Accepted Card <br />
                            <img src={require("./Assests/img/card1.png")} alt="card1" style={{ width: '20%' }} /><br />
                            {/* <img src={require("./Assests/img/card2.png")} alt='card2' style={{width:'10%', height:'20%'}}/> */}
                            <br></br>

                            Credit card number
                            <input type="text" name="" placeholder="Enter card number" />
                            <div id="zip">
                                <label htmlFor="expMonth">
                                    Exp month
                                    <input type="text" name="expMonth" placeholder="Enter Month" />
                                </label>
                                </div>
                                <div id="zip">
                                    <label htmlFor="expYear">
                                        Exp year
                                        <select name="expYear">
                                            <option>Choose Year..</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                            <option>2028</option>
                                        </select>
                                    </label>
                                    <label htmlFor="cvv">
                                        CVV
                                        <input type="number" name="cvv" placeholder="CVV" />
                                    </label>
                                </div>                            
                                {/* <Link to="/payment" > */}
                                <input type="button" value="Proceed to Checkout" onClick={handlePayment} />
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Payment;

