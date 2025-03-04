/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import Buttons from '../util/Buttons'
import AddEmpForm from './dashComponents/AddEmpForm'

function Navbar({company, handleSubmitF, editIndex, opem, setOpen}) {
  return (
    <div className="flex justify-between items-center">
        <div>
            <h1 className="text-5xl font-bold text-lime-900">HRPay</h1>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-lime-900">{company}</h1>
        </div>
        <div className="flex justify-end">
            <Buttons onClick={() => setOpen(true)}>Add Employee</Buttons>
            <AddEmpForm  handleSubmitF={handleSubmitF} editIndex={editIndex} open={opem} onClose={() => setOpen(false)} />  
            <Link to="/dashboard" className="text-lime-800 p-3">Dashboard</Link>
            <Link to="/employee" className="text-lime-800 p-3">Employeees</Link>
        </div>
    </div>
  )
}

export default Navbar