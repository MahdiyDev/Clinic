import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function useRegister() {
    const [costurer, setCostumer] = useState(null)
    const [setToken] = useAuth(false)

    useEffect(() => {
        if (costurer) {
            fetch('http://localhost:4500/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(costurer)
        })
        .then(res => res.json())
        .then(data => {
            setToken(JSON.stringify(data.accessToken))
        })
        .catch(err => console.log(err))
        }
    }, [costurer, setToken])

    return [setCostumer]
}

export default useRegister;
