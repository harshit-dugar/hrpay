//test id: test , test@example.com , test@123 , key: d17h4gydh7
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [key, setKey] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('https://hrpay.onrender.com/login', {
            email,
            password,
            key
        })
        .then((res) => {
            if(res.data === 'Success') {
                alert('Login successful');
                navigate('/dashboard');
            } else {
                alert('Login failed');
            }
        })
        .catch((err) => {
            console.log(err);
        })        
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'key') {
            setKey(value);
        } else {
            console.log('Invalid input');
        } 
    }

    return (
        <div className="">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="key" className="block text-sm font-medium text-gray-700">Key</label>
                            <input type="text" id="key" name="key" value={key} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="w-full bg-lime-800 text-white p-3 rounded">Login</button>
                    </form>
                    <div className="flex flex-col items-center pt-5">
                        <p>New to the platform?</p>
                        <a href="/register" className="text-lime-800">Register</a>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm