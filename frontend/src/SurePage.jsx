import { useNavigate } from 'react-router-dom';

function SurePage() {
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh" }}>
            <h2 style={{ color: "white" }}>You Deadass?</h2>
            <div>
            <button className="button-14" onClick={() => navigate('/donation')}>Yes</button>
            <button className="button-14" onClick={() => navigate('/dashboard')}>No</button>

            </div>
        </div>
    )
}



export default SurePage;