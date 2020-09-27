import React from "react";
import "./Footerstyle.css";


const Footer = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style"> &#169; Arpit Jindal.All Rights Reserved | Terms and Conditions {new Date().getFullYear()} </div>
        </div>
    )
}
export default Footer;