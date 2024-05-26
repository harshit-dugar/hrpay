/* eslint-disable react/prop-types */

function Buttons({children, onClick}) {
    return (
        <button onClick={onClick} className="text-lime-800"> {children} </button>
    )
}

export default Buttons