import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import "../Css/Add.css";
import axios from 'axios';



export default function AddEmployee() {
    const navigate = useNavigate();
    const [fName , setFName] = useState("");
    const [lName , setLName] = useState("");
    const [email , setEmail] = useState("");


    const addEmployee = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8089/api/v1/employees` , {
            firstname : fName,
            lastname : lName,
            emailid : email
        })
        .then(response => {
            if(response.data != null){
                alert(fName + " " + lName + " added Successfully");
            }
        })
    };
    
    return (
        <div id="content">
            <h1>Add Employee</h1>
            <form onSubmit={(e) => addEmployee(e)} >
                <label>First Name : </label>
                <input type="text"
                name="fName"
                required="required"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                />

                <br/><br/>

                <label>Last Name : </label>
                <input type="text"
                name="lName"
                required="required"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                />

                <br/><br/>

                <label>Email : </label>
                <input type="email"
                name="email"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>
                <button type= "submit">Add</button>
                <button onClick={() => navigate('/')}>Back</button>
            </form>
        </div>
    )
}
