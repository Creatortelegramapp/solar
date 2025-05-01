import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>AG Solar</NavLink>
                </div>

                <div className="burger-button" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>

                <ul className={`header-nav-list ${isOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/about" className="header-nav-link" onClick={() => setIsOpen(false)}>Մեր Մասին</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="header-nav-link" onClick={() => setIsOpen(false)}>Մեր Ծառայությունները</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}
