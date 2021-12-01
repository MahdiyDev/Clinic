import useUserAuth from "../../hooks/useUserAuth";
import Clinics from "../../components/clinics/clinics";

function Home() {
    const [user] = useUserAuth()

    return (
        <div className="home">
            {user != null ?
                <>
                    <h3>First Name: {user.customer_fname}</h3>
                    <h4>Second Name: {user.customer_sname}</h4>
                    <p>Email: {user.customer_email}</p>
                    <Clinics />
                </>
            : []}
        </div>
    )
}

export default Home;
