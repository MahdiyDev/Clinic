import useCustomers from "../../hooks/useCustomers";
import useQueue from "../../hooks/useQueue";

function Admin() {
    const [customer] = useCustomers('get')
    const [setDeleteCustomer] = useCustomers('delete')
    const [queue] = useQueue('get')
    const [setQueueDelete] = useQueue('delete')

    const deleteCustomer = (e) => {
        setDeleteCustomer(e.target.id)
        window.location = '/admin'
    }

    const removeQueue = (e) => {
        setQueueDelete(e.target.id)
        window.location = '/admin'
    }

    return(
        <div>
            <h3>Users</h3>
            <ol>
                {customer != null ? customer.map(e => {
                    return (
                        <li key={e.customer_uid}>
                            <h3>{e.customer_fname}</h3>
                            <h3>{e.customer_sname}</h3>
                            <h3>{e.customer_email}</h3>
                            <button id={e.customer_uid} onClick={deleteCustomer}>delete</button>
                        </li>
                    )
                }) : []}
            </ol>
            <h3>Queue List</h3>
            <ol>
                {queue != null ? queue.map(e => {
                    return (
                        <li key={e.queue_uid}>
                            <h4>{e.customer_fname}, {e.customer_sname}</h4>
                            <h4>{e.customer_email}</h4>
                            <p>Field: {e.field_name}</p>
                            <small>Clinic: {e.clinic_name}</small>
                            <button onClick={removeQueue} id={e.queue_uid}>remove</button>
                        </li>
                    )
                }) : []}
            </ol>
        </div>
    )
}

export default Admin;
