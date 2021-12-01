import { useEffect, useState } from "react";
import useAuth from './useAuth'
import useAdmin from './useAdmin'

function useUserAuth() {
    const [user, setUser] = useState(null)
    const [setAdminToken] = useAdmin(false)
    const [token] = useAuth(true)
    const newToken = token.length ? JSON.parse(token) : ''

    useEffect(() => {
        if (token) {
            fetch('http://localhost:4500/auth', {
                method: 'POST',
                headers: {
                    authorization: JSON.stringify(`b ${newToken}`)
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.is_admin) {
                    setAdminToken(data.is_admin)
                }
                setUser(data)
            })
            .catch(err => console.log(err))
        }
    }, [token, newToken, setAdminToken])

    return [user]
}

export default useUserAuth;
