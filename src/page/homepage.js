import React, { useState } from 'react';
import '../css/homepage.css';
import AddForm from './AddForm';
import * as XLSX from 'xlsx'; // แก้ไขที่นี่

const HomePage = () => {
    const [sale, setsale] = useState([
        { id: 1, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
    ]);

    const deleteAccount = (id) => {
        setsale(sale.filter((account) => account.id !== id));
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(sale);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales');
        XLSX.writeFile(workbook, 'sales.xlsx');
    };

    return (
        <div className="homepage">
            <div className="add-form-container">
                <AddForm sale={sale} setsale={setsale} />
            </div>
            <div className="table-container">
                <button className="export-button" onClick={exportToExcel}>
                    Export to Excel
                </button>
                <table className="excel-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Facebook</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sale.map((account) => (
                            <tr key={account.id}>
                                <td>{account.date}</td>
                                <td>{account.name}</td>
                                <td>{account.facebook}</td>
                                <td>{account.phonenumber}</td>
                                <td>{account.status}</td>
                                <td>
                                    <button className="delete-button" onClick={() => deleteAccount(account.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomePage;
