import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Header(props) {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <nav className="d-flex justify-content-center mt-4">
                    <ul type="none">
                        <li>
                            <Link className="text-decoration-none text-dark" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <ul type="none">
                        <li>
                            <Link className="text-decoration-none text-dark" to="/list">
                                List
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="btnGruop">
                <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    Back
                </button>
                <button className="btn btn-primary" onClick={() => navigate(1)}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Header;
