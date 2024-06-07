/* eslint-disable react/prop-types */
import {CSVLink} from 'react-csv';
import { Link } from 'react-router-dom';

function EmpTable({entries, handleEdit, handleDelete}) {
    //csv headers
    const headers = [
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        {label: "DOB", key: "dob" },
        { label: "Address", key: "address" },
        { label: "City", key: "city" },
        { label: "State", key: "state" },
        { label: "Country", key: "country" },
        { label: "Zip", key: "zip" },
        { label: "Joining Date", key: "joining" },
        { label: "Salary()In Hand/Month", key: "salary" },
        { label: "Paid", key: "paid" }
    ];

  return (
    <div>
        {/* //Table for aal the employee data to be displayed including the name, email, phone number, and salary and payed */}
        <div className="flex justify-center mt-10">
            <div className="bg-slate-50 p-8 rounded shadow-md w-full">
                <div className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold text-center">Employee List</h1>
                    <button className="bg-lime-200 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
                        <CSVLink data={entries} headers={headers} filename={"employee_data.csv"}>Export to CSV</CSVLink>
                    </button>
                </div>
                <table className="w-full mt-5 overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Phone</th>
                            <th className="py-2">Salary In-hand/Month</th>
                            <th className="py-2">Paid</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr key={index}>
                                <td className="py-2">
                                    <Link to={`/employee/${index}`}>{entry.name}</Link>
                                </td>
                                <td className="py-2">{entry.email}</td>
                                <td className="py-2">{entry.phone}</td>
                                <td className="py-2">{entry.salary}</td>
                                {/* If paid =yes theb bg=green */}
                                <td className={`py-2 px-5 ${entry.paid === 'yes' ? 'bg-green-200' : 'bg-red-200'}`}>{entry.paid}</td>
                                <td className="py-2 flex items-center justify-center">
                                    <button className="bg-lime-200 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default EmpTable