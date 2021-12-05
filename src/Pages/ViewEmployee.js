import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';



export default function ViewEmployee({}) {
    const {state} = useLocation();
    const {fName , lName , email} = state;

    return (
        <div>
            <h1>First Name : {fName}</h1>
            <h1>Last Name : {lName}</h1>
            <h1>Email : {email}</h1>
        </div>
    )
}
