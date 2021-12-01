import { useEffect, useState } from "react";

function useClinics() {
    const [clinic, setClinic] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4500/clinics')
        .then(res => res.json())
        .then(data => setClinic(data))
        .catch(err => console.log(err))
    }, [])

    return [clinic]
}

export default useClinics;
