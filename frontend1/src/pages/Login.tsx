import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            {/* Your login form here */}

            <button onClick={() => navigate("/add-account")}>
                Create a New Account
            </button>
        </div>
    );
}

export default Login;

/*
import { useState, useEffect } from "react";


function Login(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/example")
        .then(res =>res.json())
        .then(json => setData(json));
    }, []);

    return <div>{data ? data.message : "Loading..."}</div>;
}

export default Login;

*/