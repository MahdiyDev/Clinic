import useUserAuth from "../../hooks/useUserAuth";

function Fields({ field }) {
    const [user] = useUserAuth()

    const takeQueue = (e) => {
        fetch('http://localhost:4500/queues', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                queue_customer_uid: user.customer_uid,
                queue_field_uid: e.target.id
            })
        })
        
        window.location = '/waitingRoom'
    }

    return (
        <>
            <ul>
                {field != null ? field.map(e => {
                    return (
                        <li key={e.field_uid}>
                            <strong>{e.clinic_name}</strong>: {e.field_name}
                            <button id={e.field_uid} onClick={takeQueue}>Take Queue</button>
                        </li>
                    )
                }) : []}
            </ul>
        </>
    )
}

export default Fields;
