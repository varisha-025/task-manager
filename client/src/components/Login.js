import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Login = (props) => {
    let history = useHistory();
    const [cred, setcred] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setcred({...cred, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body:JSON.stringify({ email: cred.email, password: cred.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success){
            props.showAlert("logged in Successfully","success")
            // save the token
            localStorage.setItem("token", json.authToken )
            // redirect to the tasks home page
            console.log("success")
            history.push("/")
        }
        else{
            props.showAlert("invalid credentials","Danger")
        }
    }

    return (
        <div className="container my-3">
            <h1>Login here</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={cred.email} name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={cred.password} name="password" onChange={onChange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login
