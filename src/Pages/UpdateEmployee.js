import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import "../Css/Add.css";

export default function UpdateEmployee({}) {

    const {state} = useLocation();
    const {id , firstName , lastName , emailid} = state;

    const navigate = useNavigate();
    const [fName , setFName] = useState("");
    const [lName , setLName] = useState("");
    const [email , setEmail] = useState("");


    const updateEmployee = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8089/api/v1/employees/${id}` , {
            firstname : fName,
            lastname : lName,
            emailid : email
        })
        .then(response => {
            if(response.data != null){
                alert(fName + " " + lName + " updated Successfully");
            }
        })
    };
    return (
        <div id="content">
            <h1>Update Employee</h1>
            <h1>{id}</h1>
            <form onSubmit={(e) => updateEmployee(e)} >
                <label>First Name : </label>
                <input type="text"
                name="fName"
                required="required"
                value={fName}
                placeholder={firstName}
                onChange={(e) => setFName(e.target.value)}
                />

                <br/><br/>

                <label>Last Name : </label>
                <input type="text"
                name="lName"
                required="required"
                value={lName}
                placeholder={lastName}
                onChange={(e) => setLName(e.target.value)}
                />

                <br/><br/>

                <label>Email : </label>
                <input type="email"
                name="email"
                required="required"
                value={email}
                placeholder={emailid}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>
                <button type= "submit">Update</button>
                <button onClick={() => navigate('/')}>Back</button>
            </form>
        </div>
    )
}
