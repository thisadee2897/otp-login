import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/AddForm.css';

export default function AddForm({ sale, setsale }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [facebook, setFacebook] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    function saveSale(e) {
        e.preventDefault();
        if (!name || !date || !facebook || !phoneNumber || !status) {
            alert("กรุณาป้อนข้อมูลให้ครบทุกฟิลด์");
            return;
        }
        if (phoneNumber.length !== 10) {
            alert("เบอร์โทรศัพท์ไม่ถูกต้อง");
            return;
        }

        const newSale = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            date: formatDate(date), // กำหนดรูปแบบวันที่ใหม่
            facebook: facebook,
            phonenumber: phoneNumber,
            status: status
        };

        setsale([...sale, newSale]);
        setName("");
        setDate(new Date());
        setFacebook("");
        setPhoneNumber("");
        setStatus("");
        console.log([newSale]);
    }

    function formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const thaiDate = date.toLocaleDateString('th-TH', options);
        const thaiYear = parseInt(thaiDate.split('/')[2]) + 543; // เพิ่มค่า 543 เพื่อเปลี่ยนปีเป็น พ.ศ.
        return thaiDate.replace(thaiYear, thaiYear.toString().substring(2));
    }

    return (
        <section className="container">
            <form onSubmit={saveSale}>
                <label>ชื่อเซลล์</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                {/* <label>วันที่</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} /> */}

                <label>Facebook</label>
                <input type="text" name="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                <label>เบอร์โทรศัพท์</label>
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                <label>สถานะ</label>
                <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />

                <button type="submit" className="btn-add">บันทึก</button>
            </form>
        </section>
    );
}
