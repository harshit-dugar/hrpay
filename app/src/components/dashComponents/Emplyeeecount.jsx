/* eslint-disable react/prop-types */

function Emplyeeecount({count}) {
  return (
    <div className="flex flex-col items-center w-1/2 bg-slate-50 rounded-lg m-2">
        <h2 className="text-xl m-2">Total Employees</h2>
        <div className="flex m-5 p-5 justify-around items-center w-full">
            <div className=" flex justify-center items-center">
            <p className="text-4xl font-bold">{count}</p>
            </div>
        </div>
    </div>
  )
}

export default Emplyeeecount