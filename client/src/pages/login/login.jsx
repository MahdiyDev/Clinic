import useLogin from "../../hooks/useLogin"

function Login() {
    const [setUserLogin] = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.input')

        const user = {
            customer_email: inputs[0].value,
            customer_password: inputs[1].value
        }
        
        setUserLogin(user)
    }
    return (
        <>
            <form 
                onSubmit={handleSubmit}
            >
                <input type="email" className='input' />
                <input type="password" className='input' />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;
