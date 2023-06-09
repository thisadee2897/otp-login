import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../componemts/AuthContext';
import "../css/Navbar.css";

export default function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // อื่น ๆ ที่คุณต้องการทำหลังออกจากระบบ
    };

    return (
        <nav className="navbar">
            <Link className="navbar-link" to="/">หน้าแรก</Link>
            {isLoggedIn ? (
                <center>
                    <Link className="navbar-link" to="/customers">ข้อมูลลูกค้า</Link>
                    <Link className="navbar-link" to="/sales">ที่ปรึกษาการขาย</Link>
                    <Link className="navbar-link" to="/cars">ข้อมูลรถ</Link>
                    <Link className="navbar-link" to="/finances">ข้อมูลไฟแนนซ์</Link>
                    <Link className="navbar-link" to="/" onClick={handleLogout}>ออกจากระบบ</Link>
                </center>
            ) : (
                <Link className="navbar-link" to="/login">เข้าสู่ระบบ</Link>
            )}
        </nav>
    );
}
