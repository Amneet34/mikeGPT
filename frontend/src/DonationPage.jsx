import { useNavigate } from 'react-router-dom';

function DonationPage() {
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh" }}>
            <h2 style={{ color: "white" }}>OK...Donation required</h2>
            <input></input> <button onClick={() => navigate('/')}>Submit</button>
        </div>
    )
}



export default DonationPage;