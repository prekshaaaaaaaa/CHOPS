import React from "react";
import "./header.css";

function Header() {
    return (
        <div
            className="container header-bg"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/home.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h3 className="heading animated-heading">CHOPS</h3>
            <p className="subhead animated-heading">Where every bite tells a tale of flavour and passion</p>
        </div>
    );
}

export default Header;

