import React from "react";
import "./common-components.css"; // Make sure to import your CSS file here

function BodyLabel({ children, className }) {
    return (
        <label className={`${className}`}>{children}</label>
    );
}

export default BodyLabel;