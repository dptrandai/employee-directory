import React, { Component, useEffect, useState } from "react";
import { Employee } from "../Employee";

// array of entries we work with 

//Home component
function Home(){
    // storage for current database entries
    const [display, setList] = useState([]);
    //the current selection
    const [selection, setSelection] = useState("");
    //check to see if update is needed
    const [compare, setCompare] = useState("");

    //useEffect to load list and store 
    useEffect(() => {
        if(selection !== compare){
            switch(selection) {
            case "username":
                callUserName();
                break;
            case "date":
                callDate();
                break;
            case "first":
                callFirst();
                break;
            case "last":
                callLast();
                break;
            default:
                break;
            }
            //prevents a loop of updates
            setCompare(selection);
        }  
    });

    //sort data by hiredate
    function callDate() {
        fetch("/api/users/byDate").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by username, results: ", data);
                setList(data);
            });
        });
    };

    //sort by first name 
    function callFirst() {
        fetch("/api/users/byfirstName").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by first name, results: ", data);
                setList(data);
            })
        });
    }

    //sort by last name 
    function callLast() {
        fetch("/api/users/bylastName").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by last name, results: ", data);
                setList(data);
            });
        });
    };

    //call database and order by username
    function callUserName() {
        fetch("/api/users/byUsername").then(function(response) {
            if(response.status === 200) {
    
                response.json().then(function (data) {
                    console.log("sorting by username, results: ", data);
                    setList(data);
                });
            };
        });
    }

    //when new menu option is chosen, handle input
    function handleInputChange(event) {
        event.preventDefault();
        console.log("input change");
        const selection = event.target.value;

        setSelection(selection);
    }

    //main render function
    return (

        <div className="container">

            {/* dropdown menu to sort results */}
            <div className="dropdown">

                {/* Main button */}
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                </button>

                {/* The menu items to sort results */}
                <div className="dropdown-menu" aria-labelledby="dropdown">
                    <button className="dropdown-item" value = "username" onClick = {handleInputChange} type="button">By username</button>
                    <button className="dropdown-item" value = "date" onClick = {handleInputChange} type="button">By hire Date</button>
                    <button className="dropdown-item" value = "first" onClick = {handleInputChange} type="button">By First Name</button>
                    <button className="dropdown-item" value = "last" onClick = {handleInputChange} type="button">By Last Name</button>
                </div>
            </div>

            {/* results container */}
            {}
            {display.length ? (
              <ul>
                {display.map(index => {
                  return (
                    <Employee 
                        userName = {index.userName}
                        firstName = {index.firstName}
                        lastName = {index.lastName}
                        phone = {toString(index.phoneNumber)}
                        email = {index.email}
                    >
                    </Employee>
                  );
                })}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        
    ); 
};

export default Home;