import React, { useState } from 'react';

// !!!!!!!! FOR LIVE UPDATE, USE <p>First Name: { firstName }<p>

const Form = props => { 
    const [firstName, setFirstName] = useState("");
        const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
        const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
        const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
        const [confirmPWError, setConfirmPWError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const NewUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPW
        };
        
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length < 2 ?
                        <p>First name must be at least 2 characters.</p> :
                        <p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} />
                    {
                        lastName.length < 2 ?
                        <p>Last name must be at least 2 characters.</p> :
                        <p></p>
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} />
                    {
                        email.length < 5 ?
                        <p>Email must be at least 5 characters.</p> :
                        <p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} />
                    {
                        password.length < 8 ?
                        <p>Password must be at least 8 characters.</p> :
                        <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPW(e.target.value)} />
                    {
                        confirmPW === password ?
                        <p></p> :
                        <p>Password must match.</p>
                    }
                </div>
            </form>
            <hr/>
            <p>Your form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPW}</p>
        </div>
    )
};

export default Form;