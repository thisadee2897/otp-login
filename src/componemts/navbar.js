import {Link} from "react-router-dom"
import "../css/Navbar.css"
export default function Navbar(){
    return(
        <nav>
        <Link to="/">หน้าแรก</Link>
        <Link to="/customers">ข้อมูลลูกค้า</Link>
        <Link to="/sales">ที่ปรึกษาการขาย</Link>
        <Link to="/cars">ข้อมูลรถ</Link>
        <Link to="/finances">ข้อมูลไฟแนนซ์</Link>
        </nav>
    )
}