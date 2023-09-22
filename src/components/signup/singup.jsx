import { useState } from 'react'
import './signup.css'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            name: name,
            password: password
        }

        localStorage.setItem("user email", data.email)
        localStorage.setItem("user name", data.name)
        localStorage.setItem("user password", data.password)
        setResult("SignUp Sucessful")
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input name='email' type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <button>Sign Up</button>

            </form>
        </div>
    )
}

export default Signup