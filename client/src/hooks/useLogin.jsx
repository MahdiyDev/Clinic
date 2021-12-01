import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function useLogin() {
    const [setToken] = useAuth(false)
    const [userLogin, setUserLogin] = useState(null)

    useEffect(() => {
        if (userLogin) {
            fetch('http://localhost:4500/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
            })
            .then(res => res.json())
            .then(data => {
                setToken(JSON.stringify(data.accessToken))
            })
            .catch(err => console.log(err))
        }
    }, [userLogin, setToken])

    return [setUserLogin]
}

export default useLogin;
