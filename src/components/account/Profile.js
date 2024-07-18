import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <h2>Edit Your Profile</h2>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value="Md" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value="Rimel" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value="rimel111@gmail.com" />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" value="Kingston, 5236, United States" />
                </div>
                <div>
                    <label>Current Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm New Password</label>
                    <input type="password" />
                </div>
                <button type="button">Cancel</button>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Profile;
