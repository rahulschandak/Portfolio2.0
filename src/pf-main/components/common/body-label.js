import React from "react";
import "./common-components.css";

function BodyLabel({ children, className }) {
    return (
        <label className={`${className}`}>{children}</label>
    );
}

export default BodyLabel;