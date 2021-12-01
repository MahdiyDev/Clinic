import { useContext } from "react";
import { Admin } from '../context/Admin'

function useAdmin(setter) {
    const {adminToken, setAdminToken} = useContext(Admin)
    return setter ? [adminToken, setAdminToken] : [setAdminToken]
}

export default useAdmin;
