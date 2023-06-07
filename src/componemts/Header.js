import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>ระบบจัดการข้อมูลขายรถ</span>
      </div>
      <div className="theme-container">
        <span>โหมดกลางคืน</span>
        <span className="icon">สลับ</span>
      </div>
    </header>
  );
};

export default Header;
