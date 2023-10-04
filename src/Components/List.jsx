import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function List(props) {
    const navigate = useNavigate();

    const getData = localStorage.getItem("userData");

    const data = JSON.parse(getData)

    const handleDelete = (id) => {
        data.splice(id, 1);
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/list", { replace: true });
    };


    return (
        <>
            <div className="container">
                <Table border={2}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Passwod</td>
                        <td>Action</td>
                    </tr>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </Table>
            </div>
        </>
    );
}

export default List;
