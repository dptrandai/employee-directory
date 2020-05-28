import React, { Component } from "react";

//Add function component, will contain user input information and submit button to add another employee to directory
class Add extends Component{
    //initial state
    state = {
        userName: "User Name",
        firstName: "First Name",
        lastName: "Last Name",
        phone: "XXX-XXX-XXXX",
        email: "abc@email.com"
    };

    //when input fields are changed, update the state stored above
    handleInputChange = event => {
        //input we need to change
        const name = event.target.name;
        //new input
        let value = event.target.value;

        //update the input state
        this.setState({
            [name]: value
        });
    };

    //when submit button is pressed, submit the form to database
    handleSubmit = event => {
        //if fields are not filled out, alert user to complete input fields
        if (!this.state.email || !this.state.firstName || !this.state.phone || !this.state.userName || !this.state.lastName) {
            alert ("Please fill in all the data on the page above.");
        } else {
            //create user to post to our database
            const user = {
                userName: this.state.userName,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phone,
                email: this.state.email
            };

            console.log("User created: ", user);

            //fetch to our server with a post method
            fetch("/api/newUser", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }).then(alert("User Added"));
        };
    };

    render() {
        return(
            <div>
                {/* Title */}
                <h1 className = "text-primary border-bottom">Add new Users to the directory:</h1>
                
                {/* The Form the user works with to add new user */}
                <form>
                    <p>Fill in the form below to add a new user.</p>
                    <div className="form-group">
                        
                        {/* The username input */}
                        <label htmlFor="userName">Username:</label>
                        <input type="text" name = "userName" value = {this.state.userName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* First name input  */}
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name = "firstName" value = {this.state.firstName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* Last name input  */}
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name = "lastName" value = {this.state.lastName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* phone number input  */}
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="phone" name = "phone" value = {this.state.phone} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* email address input  */}
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name = "email" value = {this.state.email} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* Submit button */}
                        <button className="btn btn-primary" onClick = {this.handleSubmit} >Add User</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default Add;