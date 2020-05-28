import React from "react";

export function Employee(props) {
return (
    <ul>
        <li className = "list-group-item">Username: {props.userName}</li>
        <li className = "list-group-item">First Name: {props.firstName}</li>
        <li className = "list-group-item">Last Name: {props.lastName}</li>
        <li className = "list-group-item">Phone #: {props.phoneNumber}</li>
        <li className = "list-group-item">Email Address: {props.email}</li>
        <br/>
    </ul>);
};