import React, { useState } from 'react';
import '../css/homepage.css';
import AddForm from './AddForm';
import * as XLSX from 'xlsx'; // แก้ไขที่นี่

const HomePage = () => {
    const [sale, setsale] = useState([
        { id: 1, date: '01/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 2, date: '02/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'A' },
        { id: 3, date: '03/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'B' },
        { id: 4, date: '04/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 5, date: '05/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'C' },
        { id: 6, date: '05/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'จอง' },
        { id: 7, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ยกเลิก' },
        { id: 8, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ถอนจอง' },
        { id: 9, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'รอเซ็น' },
        { id: 10, date: '07/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ส่งมอบ' },
        { id: 11, date: '08/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 12, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'A' },
        { id: 13, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 14, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'B' },
        { id: 15, date: '10/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 16, date: '11/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 17, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 18, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 19, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'B' },
        { id: 20, date: '05/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'จอง' },
        { id: 21, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ยกเลิก' },
        { id: 22, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ถอนจอง' },
        { id: 23, date: '06/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'รอเซ็น' },
        { id: 24, date: '07/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'ส่งมอบ' },
        { id: 25, date: '08/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 26, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'A' },
        { id: 27, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 28, date: '09/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'B' },
        { id: 29, date: '10/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'H' },
        { id: 30, date: '11/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 31, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 32, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'F' },
        { id: 33, date: '12/06/2023', name: 'odin', facebook: 'โอ', phonenumber: '0889594528', status: 'B' },

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
                <button className="export-button" onClick={exportToExcel}>
                    Export to Excel
                </button>
            </div>
            <div className="table-container">
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
