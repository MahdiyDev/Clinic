import { Redirect, Route } from "react-router-dom";

/* Hooks */
import useAdmin from '../hooks/useAdmin'

function AdminControl(props) {
    const [token] = useAdmin(true)

    if (token) {
        return <Route {...props} />
    } else {
        return <Redirect to='/' />
    }
}

export default AdminControl;