import { useEffect, useState } from "react"

function useQueue(setter) {
    const [queue, setQueue] = useState(null)
    const [queueDelete, setQueueDelete] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4500/queues')
        .then(res => res.json())
        .then(data => setQueue(data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (queueDelete) {
            fetch('http://localhost:4500/queues',{
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ queue_uid: queueDelete })
            })
            .then(res => res.json())
            .catch(err => console.log(err))
        }
    }, [queueDelete])

    if (setter === 'get') {
        return [queue]
    }
    if (setter === 'delete') {
        return [setQueueDelete]
    }
}

export default useQueue;
