import './login.css'

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input type="text" placeholder='Email' />
                </div>
                <div>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login