import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}>
            <h2 style={{ textAlign: "center", color: "white" }}>Are you sure you want to logout?</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button className="button-14" onClick={() => navigate('/sure')}>Yes</button>
                <button className="button-14" onClick={() => navigate('/dashboard')}>No</button>
            </div>
        </div>
    )

}

export default LogoutPage;
