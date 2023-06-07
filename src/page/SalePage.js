import React from 'react';
import '../css/homepage.css';

const HomePage = () => {
    const userAccounts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    return (
        <div className="homepage">
            <h1>User Accounts</h1>
            <ul>
                {userAccounts.map((account) => (
                    <li key={account.id}>{account.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
