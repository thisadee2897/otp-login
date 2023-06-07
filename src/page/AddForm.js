
import { useState } from "react";
import "../css/AddForm.css";
export default function AddForm() {
    const [name, setName] = useState("");
    function saveSale(e) {
        e.preventDefault();
        if (!name) {
            alert("กรุณาป้อนข้อมูลด้วยครับ")
        } else {
            const newSale = {
                id: Math.floor(Math.random() * 10000),
                name: name
            }
            console.log(newSale);
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

}