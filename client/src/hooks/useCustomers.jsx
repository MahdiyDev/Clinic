import { useEffect, useState } from "react";

function useCustomers(value) {
    const [customer, setCustomer] = useState(null)
    const [deleteCustomer, setDeleteCustomer] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4500/customers')
        .then(res => res.json())
        .then(data => setCustomer(data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (deleteCustomer) {
            fetch('http://localhost:4500/customers',{
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ customer_uid: deleteCustomer })
            })
            .then(res => res.json())
            .catch(err => console.log(err))
        }
    }, [deleteCustomer])

    if (value === 'get') {
        return [customer]
    }
    if (value === 'delete') {
        return [setDeleteCustomer]
    }
}

export default useCustomers;
