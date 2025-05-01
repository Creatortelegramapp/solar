import React from "react";
import "../styles/Button.css";

const Button = ({ text, link }) => {
    return (
        <a href={link} className="custom-button">
            {text}
        </a>
    );
};
export default Button;