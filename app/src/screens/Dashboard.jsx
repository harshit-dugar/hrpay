/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import EmpTable from '../components/dashComponents/EmpTable'
import Emplyeeecount from "../components/dashComponents/Emplyeeecount"
import TotalPays from "../components/dashComponents/TotalPays"

function Dashboard({count,company, salaryFormat, entries, formData, handleInputChange, handleSubmitF, editIndex, opem, setOpen, handleEdit, handleDelete}) {
  
  return (
    <div className="flex flex-col justify-center p-8">
      <Navbar company={company} formData={formData} handleInputChange={handleInputChange} handleSubmitF={handleSubmitF} editIndex={editIndex} opem={opem} setOpen={setOpen} />
      <div className="flex mt-2 mr-2">
        <div className="flex flex-col m-5 w-full">
          <div className="flex items-center justify-between mb-10">
          <Emplyeeecount count={count} />
          <TotalPays salaryFormat={salaryFormat}/>
          </div>        
          <EmpTable entries={entries} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard