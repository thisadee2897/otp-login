import "../css/NewAddForm.css";
export default function AddForm(){
    return(
        <header >
            <h2>แบบฟอร์มเพิ่มข้อมูลลูกค้า</h2>
            <form className="form-group"></form>
            <input type="text" className="text-input"></input>
            <button type="submit" className="submit-btn">เพิ่ม</button>
        </header>
    )
}