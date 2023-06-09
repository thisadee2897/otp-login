import React from 'react';
import '../css/SalesCard.css';

const salesData = [
    { id: 1, firstName: 'John', lastName: 'Doe', nickname: 'Johny', age: 30, position: 'Sales Manager' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', nickname: 'Janey', age: 25, position: 'Sales Representative' },
  { id: 3, firstName: 'Mike', lastName: 'Johnson', nickname: 'Mikey', age: 35, position: 'Sales Associate' },
  { id: 4, firstName: 'Emily', lastName: 'Williams', nickname: 'Emi', age: 28, position: 'Sales Coordinator' },
  { id: 5, firstName: 'David', lastName: 'Brown', nickname: 'Dave', age: 32, position: 'Sales Executive' },
  { id: 6, firstName: 'Sarah', lastName: 'Davis', nickname: 'Sara', age: 27, position: 'Sales Representative' },
  { id: 7, firstName: 'Michael', lastName: 'Miller', nickname: 'Mike', age: 31, position: 'Sales Manager' },
  { id: 8, firstName: 'Jessica', lastName: 'Wilson', nickname: 'Jess', age: 29, position: 'Sales Associate' },
  { id: 9, firstName: 'Andrew', lastName: 'Taylor', nickname: 'Andy', age: 33, position: 'Sales Representative' },
  { id: 10, firstName: 'Olivia', lastName: 'Anderson', nickname: 'Liv', age: 26, position: 'Sales Coordinator' },

    // เพิ่มรายชื่ออื่น ๆ ต่อไป...
];

const Sale = () => {
    return (
        <>
            <h2>หน้าข้อมูลเซลล์</h2>
            <div className="card-container">
                {salesData.map((sale) => (
                    <div className="card" key={sale.id}>
                        <h3>{`${sale.firstName} ${sale.lastName}`}</h3>
                        <p>ชื่อเล่น: {sale.nickname}</p>
                        <p>อายุ: {sale.age}</p>
                        <p>ตำแหน่งงาน: {sale.position}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sale;
