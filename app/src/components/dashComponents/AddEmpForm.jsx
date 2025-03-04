import { useState } from "react";
/* eslint-disable react/prop-types */
function AddEmpForm({ handleSubmitF, editIndex,open,onClose}) {    
    const [formData, setFormData] = useState(()=>{
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
        name:'',
        age: '',
        email: '',
        phone: '',
        DOB: '',
        Address: '',
        PAN_Card:"",
        Aadhar_Number:"",
        Bank_Name:"",      
        IFSC_Code:"",
        Account_Number:"",
        salary: '',
        paid: ''
        }    
    });
    const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value || ''
    });
    };
    return (
        //backdrop for form
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${open ? 'flex justify-center overflow-y-auto' : 'hidden'}`} onClick={onClose}>

        <div className="flex justify-center items-center w-1/2">
            <form onSubmit={handleSubmitF} className="bg-white p-8 rounded shadow-md w-full"  onClick={(e)=> e.stopPropagation()}>
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
                {/*DOB*/}
                <div className="mb-6">
                    <label htmlFor="DOB" className="block text-lime-800 text-sm font-bold mb-2">DOB</label>
                    <input
                        type="date"
                        id="DOB"
                        name="DOB"
                        value={formData.DOB}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*Address*/}
                <div className="mb-6">
                    <label htmlFor="Address" className="block text-lime-800 text-sm font-bold mb-2">Address</label>
                    <input
                        type="text"
                        id="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*PAN Card*/}
                <div className="mb-6">
                    <label htmlFor="PAN Card" className="block text-lime-800 text-sm font-bold mb-2">PAN Card</label>
                    <input
                        type="text"
                        id="PAN Card"
                        name="PAN_Card"
                        value={formData.PAN_Card}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*Aadhar Number*/}
                <div className="mb-6">
                    <label htmlFor="Aadhar Number" className="block text-lime-800 text-sm font-bold mb-2">Aadhar Number</label>
                    <input
                        type="text"
                        id="Aadhar Number"
                        name="Aadhar_Number"
                        value={formData.Aadhar_Number}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*Bank Name*/}
                <div className="mb-6">
                    <label htmlFor="Bank Name" className="block text-lime-800 text-sm font-bold mb-2">Bank Name</label>
                    <input
                        type="text"
                        id="Bank Name"
                        name="Bank_Name"
                        value={formData.Bank_Name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*IFSC Code*/}
                <div className="mb-6">
                    <label htmlFor="IFSC Code" className="block text-lime-800 text-sm font-bold mb-2">IFSC Code</label>
                    <input
                        type="text"
                        id="IFSC Code"
                        name="IFSC_Code"
                        value={formData.IFSC_Code}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/*Account Number*/}
                <div className="mb-6">
                    <label htmlFor="Account Number" className="block text-lime-800 text-sm font-bold mb-2">Account Number</label>
                    <input
                        type="text"
                        id="Account Number"
                        name="Account_Number"
                        value={formData.Account_Number}
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