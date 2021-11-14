import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const [newCred, setnewCred] = useState({ name: "", email: "", password: "", cpassword: "" });
    let history = useHistory();
    const onChange = (e) => {
        setnewCred({ ...newCred, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newCred.name, email: newCred.email, password: newCred.password })

        });
        const json = await response.json();
        if (json.success) {
            props.showAlert("account created Successfully ", "success")
            console.log(json)
            // save the token
            localStorage.setItem("token", json.authToken)
            // redirect to the tasks home page
            // console.log(hist)
            history.push("/")
        }
        else {
            props.showAlert("invalid details","Danger")
        }


    }

    return (
        <div className="container my-3">
            <h1>Signup here</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" value={newCred.name} onChange={onChange} name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={newCred.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={newCred.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={newCred.cpassword} onChange={onChange} name="cpassword" id="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
