import axios from 'axios';
import React, { createContext, Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import "../Css/Employee.css"

export default function Employee({setId}) {
    const [employeeInfo , setEmployeeInfo] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8089/api/v1/employees`)
        .then(response => {
            setEmployeeInfo(response.data);
        })
        .catch(err => console.log(err));
    });

    const deleteEmployee = (id) => {
        axios.delete(`http://localhost:8089/api/v1/employees/${id}`)
            .then((response) =>{
                if(response.data != null){
                    const newEmployeeInfo = employeeInfo.filter(e => {
                        return (
                            e.id != id
                        )
                            
                    })
                    setEmployeeInfo(newEmployeeInfo);
                    
                }
            });
            
    }
    

    return (
        <>
            <div>
                <header id="title">
                    <h2>Employees List</h2>
                </header>
                <button id="add" onClick={() => navigate('/add')}>
                    Add Employee
                </button>

                <br/><br/><br/>
                <div>
                    <table>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                        {employeeInfo.map(e => (
                            <>
                                <tr>
                                    <td>{e.firstname}</td>
                                    <td>{e.lastname}</td>
                                    <td>{e.emailid}</td>
                                    <td>
                                        <button id="update" onClick={() => navigate('/update' , {state :
                                            {id : e.id,
                                            firstName : e.firstname,
                                            lastName : e.lastname,
                                            emailid : e.emailid
                                            }})}>
                                            Update
                                        </button>
                                        &emsp;
                                        <button id="delete" onClick={() => deleteEmployee(e.id)}>
                                            Delete
                                        </button>
                                        &emsp;
                                        <button id="view" onClick={() => navigate('/view' , {state :
                                            {fName : e.firstname,
                                            lName : e.lastname,
                                            email : e.emailid
                                            }})}>
                                            View
                                        </button>
                                        
                                    </td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>
            </div>

        </>
        
    )
}

// export {details};