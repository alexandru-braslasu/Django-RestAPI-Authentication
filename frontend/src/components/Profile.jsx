import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate()
    const storedUser = localStorage.getItem("user")
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const jwt_access = localStorage.getItem("access")
    useEffect(() => {
        if (jwt_access == null && !user) {
            navigate("/login")
        }
    }, [])
    return (
        <div className="container">
            <h2>hi {parsedUser && parsedUser.names}</h2>
            <p style={{textAlign: "center"}}>welcome to your profile</p>
            <button className="logout-btn">Logout</button>
        </div>
    )
}

export default Profile