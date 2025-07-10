import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="container">
            <img src="/images/home.png" alt="Home" className="header-img" style={{width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px'}} />
            <h3 className="heading animated-heading">CHOPS</h3>
            <p className="subhead animated-heading">Where every bite tells a tale of flavour and passion</p>
            {/* Navigation removed as requested */}
        </div>
    );
}

export default Header;
