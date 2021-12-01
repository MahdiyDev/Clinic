import { createContext, useState, useEffect } from "react";

const Admin = createContext()

function AdminController({ children }) {
    const [adminToken, setAdminToken] = useState(
        window.localStorage.getItem('adminToken')
    )
    useEffect(() => {
        if (adminToken) {
            window.localStorage.setItem('adminToken', adminToken)
        } else {
            window.localStorage.removeItem('adminToken')
        }
    }, [adminToken])

    return (
        <Admin.Provider value={{ adminToken, setAdminToken }}>{children}</Admin.Provider>
    )
}

export {AdminController, Admin }
