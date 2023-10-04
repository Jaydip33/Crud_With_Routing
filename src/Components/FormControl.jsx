import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const arr = [];

function FormControl(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        const data = {
            "name": name,
            "email": email,
            "password": password,
        };

        arr.push(data);

        localStorage.setItem("userData", JSON.stringify(arr));

        navigate("/", { replace: true });

        alert("Succeccfully submitted...");

        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form action="#" onSubmit={handlesubmit} className="fromGroup">
                Name :
                <input
                    className="mx-2 border border-dark rounded"
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                Email :
                <input
                    className="mx-2 border border-dark rounded"
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                Password :
                <input
                    className="mx-2 border border-dark rounded"
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <input className="btn btn-success" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormControl;
