import { useEffect, useState } from "react";
import useQueue from "../../hooks/useQueue";
import useUserAuth from "../../hooks/useUserAuth";

function WaitingRoom() {
    const [queue] = useQueue('get')
    const [user] = useUserAuth()
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (queue != null) {
            if (queue[0].customer_email === user.customer_email) {
                setTitle('Sani galing keldi')
            } else {
                queue.map(e => {
                    if (e.customer_email !== user.customer_email) {
                        setTitle('Iltimos joy olish uchun bosh saxifaga o`ting')
                    } else {
                        setTitle('kuting')
                    }
                })
            }
        } else {
            setTitle('Iltimos joy olish uchun bosh saxifaga o`ting')
        }
    }, [user])

    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default WaitingRoom;
