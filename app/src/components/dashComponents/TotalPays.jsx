/* eslint-disable react/prop-types */
function TotalPays({salaryFormat}) {
  return (
    <div className="flex flex-col items-center w-1/2 bg-slate-50 rounded-lg m-2">
        <h2 className="text-xl m-2">Total Employees</h2>
        <div className="flex m-2 justify-around items-center w-full">
            <div className="flex justify-center items-center">
            <p className="text-4xl font-bold">{salaryFormat}</p>
            </div>
            <div>
                {/*Line chart for salary spent each month*/}
                <div className="bg-lime-200 w-32 h-32 rounded-full">
                {/* <ChartsLine data={salaryData} />                 */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalPays