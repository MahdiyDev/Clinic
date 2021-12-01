import { useEffect, useState } from "react";
import useQueue from "../../hooks/useQueue";
import useUserAuth from "../../hooks/useUserAuth";

function WaitingRoom() {
    const [queue] = useQueue('get')
    const [user] = useUserAuth()
    const [title, setTitle] = useState('')
    const [foundUser, setFoundUser] = useState([])

    useEffect(() => {
        if (queue != null && user != null && queue.length) {
            if (queue[0].customer_email === user.customer_email) {
                setTitle('Sizni navbatingiz keldi')
            } else {
                queue.map(e => {
                    if (e.customer_email !== user.customer_email) {
                        setTitle('Iltimos joy olish uchun bosh saxifaga o`ting')
                    } else {
                        setTitle('kuting')
                    }
                })
            }
            const findUser = queue.filter((q) => q.customer_email === user.customer_email)
            setFoundUser(findUser)
        } else {
            setTitle('Iltimos joy olish uchun bosh saxifaga o`ting')
        }
    }, [queue])

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {queue != null && queue.length && user ? queue.map((e, i) => {
                    if (e.customer_email === user.customer_email) {
                        return (
                            <h2 key={i}>Siznig {e.field_name}dagi navbatingiz: {i+1}</h2>
                        )
                    }
                }) : []}
                {foundUser.length ? foundUser.map((e) => {
                    return (
                        <li key={e.queue_uid}>
                            <h3>{e.field_name}</h3>
                            <small>{e.clinic_name}</small>
                        </li>
                    )
                }) : []}
            </ul>
        </>
    )
}

export default WaitingRoom;
