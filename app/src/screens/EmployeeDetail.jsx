/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom"

function EmployeeDetail({entries}) {
  const {index} = useParams();
  const employee = entries[parseInt(index)];

  return (
    <div>
        <h1 className="text-3xl font-bold text-center">Employee Details</h1>
        <div className="flex justify-center mt-10">
            <div className="bg-white p-8 rounded shadow-md w-full">
            <h1 className="text-3xl font-bold text-center">{employee.name}</h1>
            <div className="flex justify-between mt-5">
                <div>
                <p><span className="font-bold">Email:</span> {employee.email}</p>
                <p><span className="font-bold">Phone:</span> {employee.phone}</p>
                <p><span className="font-bold">Salary:</span> {employee.salary}</p>
                <p><span className="font-bold">Paid:</span> {employee.paid}</p>
                </div>
                <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </div>
            </div>
            </div>
        </div>                
    </div>
  )
}

export default EmployeeDetail