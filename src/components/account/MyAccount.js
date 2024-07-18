import React, { useState } from 'react';
import './MyAccount.css';
import profileicon from './profile-user.png';
import { prettyFormat } from '@testing-library/react';

const MyAccount = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const username = "Md Rimel";

    const renderSection = () => {
        switch (activeSection) {
            case 'profile':
                return <Profile />;
            case 'addressBook':
                return <AddressBook />;
            case 'paymentOptions':
                return <PaymentOptions />;
            case 'orders':
                return <Orders />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="my-account">
            <div className="sidebar">
            <header className="header">
                <div className="profile-info">
                <span>Welcome, {username}</span>
                    <img className="profileicon" src={profileicon} alt="Profile Icon" />
                </div>
            </header>
                <h2>Manage My Account</h2>
                <ul>
                    <li onClick={() => setActiveSection('profile')}>My Profile</li>
                    <li onClick={() => setActiveSection('addressBook')}>Address Book</li>
                    <li onClick={() => setActiveSection('paymentOptions')}>My Payment Options</li>
                    <li onClick={() => setActiveSection('orders')}>My Orders</li>
                </ul>
            </div>
            <div className="content">
                {renderSection()}
            </div>
        </div>
    );
};

const Profile = () => {
    return(
    <div>
        <h3>Edit Your Profile</h3>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Address</label>
                <input type="text" name="address" />
            </div>
            <div>
                <label>Current Password</label>
                <input type="password" name="currentPassword" />
            </div>
            <div>
                <label>New Password</label>
                <input type="password" name="newPassword" />
            </div>
            <div>
                <label>Confirm New Password</label>
                <input type="password" name="confirmNewPassword" />
            </div>
            <div>
                <button type="submit">Save Changes</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    </div>
    );
};

// Placeholder components for other sections
const AddressBook = () => {
    return (
        <div>
            <h3>Address Book</h3>
            <form>
                <div>
                    <label>Address Line 1</label>
                    <input type="text" name="addressLine1" />
                </div>
                <div>
                    <label>Address Line 2</label>
                    <input type="text" name="addressLine2" />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" name="city" />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" name="state" />
                </div>
                <div>
                    <label>Zip Code</label>
                    <input type="text" name="zipCode" />
                </div>
                <div>
                    <button type="submit">Save Address</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};


const PaymentOptions = () => {
    return (
        <div>
            <h3>Payment Options</h3>
            <form>
                <div>
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" />
                </div>
                <div>
                    <label>Card Holder Name</label>
                    <input type="text" name="cardHolderName" />
                </div>
                <div>
                    <label>Expiry Date</label>
                    <input type="text" name="expiryDate" placeholder="MM/YY" />
                </div>
                <div>
                    <label>CVV</label>
                    <input type="text" name="cvv" />
                </div>
                <div>
                    <button type="submit">Save Payment Option</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

const Orders = () => {
    return (
        <div>
            <h3>My Orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>2024-06-01</td>
                        <td>Shipped</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>2024-06-02</td>
                        <td>Processing</td>
                        <td>$150</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default MyAccount;
