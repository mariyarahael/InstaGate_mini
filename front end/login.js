import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        alert(result.message);
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-4xl">
                {/* Left Side (Image & Branding) */}
                <div className="hidden md:flex flex-col justify-between p-8 bg-gray-700 rounded-l-xl w-1/2">
                    <h1 className="text-2xl font-bold">InstaGate</h1>
                    <div className="flex-grow flex flex-col justify-center">
                        <img src="image5.jpg" className="rounded-lg" alt="fithos" />
                        <p className="mt-4 text-lg">Secure & Seamless Login</p>
                    </div>
                    <button className="mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm">Back to website →</button>
                </div>
                
                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="text-gray-400 mt-2">Don't have an account? <a href="reg.html" className="text-blue-400">Sign up</a></p>
                    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400" required />
                        <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-md">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;