import React, { useState } from 'react';
import '../css/homepage.css';
import AddForm from './AddForm';

const HomePage = () => {
    const [sale, setsale] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
        { id: 4, name: 'John Doe' },
        { id: 5, name: 'Jane Smith' },
        { id: 6, name: 'Bob Johnson' },
        { id: 7, name: 'John Doe' },
        { id: 8, name: 'Jane Smith' },
        { id: 9, name: 'Bob Johnson' },
        { id: 10, name: 'John Doe' },
        { id: 11, name: 'Jane Smith' },
    ]);

    // ฟังก์ชันสำหรับลบรายการ
    const deleteAccount = (id) => {
        setsale(sale.filter((account) => account.id !== id));
    };

    return (
        <div className="homepage">
            <AddForm sale={sale} setsale={setsale} />
            <table className="excel-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sale.map((account) => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteAccount(account.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
