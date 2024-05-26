/* eslint-disable react/prop-types */

function AddEmpForm({ formData, handleInputChange, handleSubmit, editIndex,open,onClose}) {    

    return (
        //backdrop for form
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${open ? 'flex items-center justify-center' : 'hidden'}`} onClick={onClose}>

        <div className="flex justify-center items-center w-1/2" onClick={(e)=> e.stopPropagation()}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full">
                <h1 className="text-3xl font-bold text-center">Add Employee</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lime-800 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-lime-800 text-sm font-bold mb-2">Age</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-lime-800 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-lime-800 text-sm font-bold mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="salary" className="block text-lime-800 text-sm font-bold mb-2">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="paid" className="block text-lime-800 text-sm font-bold mb-2">Payment</label>
                    <input
                        type="text"
                        id="paid"
                        name="paid"
                        value={formData.paid}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-lime-800 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddEmpForm