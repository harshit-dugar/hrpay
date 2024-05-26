/* eslint-disable react/prop-types */

function RegisterForm({name, setName, email, setEmail, company, setCompany, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit}) {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                <label className="block">Name</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="mt-4">
                <label className="block">Email</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mt-4">
                <label className="block">Company</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                </div>
                <div className="mt-4">
                <label className="block">Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded mt-1"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>
                <div className="mt-4">
                <button
                    type="submit"
                    className="w-full bg-lime-800 text-white p-2 rounded"
                >
                    Register
                </button>
                </div> 
                <p className="mt-4 text-center">
                Already have an account? <a href="/" className="underline text-lime-800">Login</a>
                </p>
            </form>           
            </div>
        </div>
    </div>
  )
}

export default RegisterForm