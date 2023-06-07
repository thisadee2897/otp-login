import "../css/AddForm.css";
export default function AddForm(){
    return <section className="container">
        <form>
            <label>ชื่อเซลล์</label>
            <input type="text" name="name"></input>
            <button type="submit" className="btn-add">บันทึก</button>
        </form>
    </section>

}