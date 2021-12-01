import { useState } from "react";
import useClinics from "../../hooks/useClinics";
import Fields from "../fields/fields";

function Clinics() {
    const [clinic] = useClinics()
    const [field, setField] = useState(null)

    const addField = (e) => {
        fetch(`http://localhost:4500/fields/${e.target.id}`)
        .then(res => res.json())
        .then(data => setField(data))
        .catch(err => console.log(err))
    }

    return (
        <>
            <ul>
                {clinic != null ? clinic.map(e => {
                    return (
                        <li key={e.clinic_uid}>
                            {e.clinic_name}
                            <button onClick={addField} id={e.clinic_uid} >+</button>
                        </li>
                    )
                }) : []}
                <Fields field={field} />
            </ul>
        </>
    )
}

export default Clinics;
