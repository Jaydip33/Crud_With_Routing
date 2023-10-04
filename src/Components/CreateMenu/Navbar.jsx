import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CreateMenu/Style.css"

function Navbar(props) {
    const navigate = useNavigate();

    return (
        <>
            <nav className="d-flex justify-content-between bg-dark" style={{ height: "50px" }}>
                <div className="d-flex justify-content-start align-items-center bg-dark">
                    <ul type="none" className="m-2">
                        <li>
                            <Link className="text-decoration-none text-light" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <ul type="none" className="m-2">
                        <li>
                            <Link className="text-decoration-none text-light" to="/about">
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <ul type="none" className="m-2">
                        <li>
                            <Link className="text-decoration-none text-light" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <ul type="none" className="m-2">
                        <li>
                            <Link className="text-decoration-none text-light" to="/login">
                                <Button variant="contained" color="error">Login</Button>
                            </Link>
                        </li>
                    </ul>
                    <ul type="none" className="m-2">
                        <li>
                            <Link className="text-decoration-none text-light" to="/singup">
                                <Button variant="contained" color="error">Sing Up</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="btnGruop d-flex justify-content-between m-2">
                <Button variant="outlined" onClick={() => navigate(-1)}>
                    Back
                </Button>
                <Button variant="outlined" onClick={() => navigate(1)}>
                    Next
                </Button>
            </div>
        </>
    );
}

export default Navbar;
