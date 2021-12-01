import useRegister from "../../hooks/useRegister";

function SignUp() {
    const [setCostumer] = useRegister()

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.input')

        const costumer = {
            customer_fname: inputs[0].value,
            customer_sname: inputs[1].value,
            customer_email: inputs[2].value,
            customer_password: inputs[3].value
        }

        setCostumer(costumer)
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
            >
                <input className='input' type="text" placeholder='First Name' />
                <input className='input' type="text" placeholder='Second Name' />
                <input className='input' type="email" placeholder='Email' />
                <input className='input' type="password" placeholder='Password' />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;
