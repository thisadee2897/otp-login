
import { useState } from "react";
import "../css/AddForm.css";
export default function AddForm({ sale, setsale }) {
    // const {sale,setsale} =props;
    const [name, setName] = useState("");
    function saveSale(e) {
        e.preventDefault();
        if (!name) {
            alert("กรุณาป้อนข้อมูลด้วยครับ");
            return;
        } else {
            const newSale = {
                id: Math.floor(Math.random() * 10000),
                name: name
            }
            setsale([...sale, newSale]);
            setName("");
        }

    }
    return <section className="container">
        <form onSubmit={saveSale}>
            <label>ชื่อเซลล์</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit" className="btn-add">บันทึก</button>
        </form>
    </section>

};