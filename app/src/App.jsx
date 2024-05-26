import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import RegisterForm from './components/RegisterForm'
import EmployeeDetail from './screens/EmployeeDetail'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  //registration logic
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    axios.post('http://localhost:3000/register', {
      name,
      email,
      company,
      password
    })
    .then((res) => {
      //display company name on dashboard
      setCompany(company)
      alert('Registration successful')
      res.data === 'Success' && window.location.replace('/')      
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const [opem, setOpen] = useState(false);
  const [formData, setFormData] = useState(()=>{
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
      name: '',
      age: '',
      email: '',
      phone: '',
      DOB: '',
      Address: '',
      
      PAN_Card:""
      Aadhar_Number:"",
      Bank_Name:"",      
      IFSC_Code:"",
      Account_Number:"",
      salary: '',
      paid: ''
    }    
  });
  // State to hold list of entries
  const [entries, setEntries] = useState(()=>{
    const storedEntries = localStorage.getItem('entries');
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  // State to hold index of entry being edited
  const [editIndex, setEditIndex] = useState(null);
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };
  const handleSubmitF = (e) => {
      e.preventDefault();
      if (editIndex !== null) {
          // Update existing entry if in edit mode
          const updatedEntries = [...entries];
          updatedEntries[editIndex] = formData;
          setEntries(updatedEntries);
          setEditIndex(null);
      } else {
          // Add new entry to the list
          setEntries([...entries, formData]);
      }
      // Reset form data
      setFormData({
          name: '',
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
      });
      setOpen(false);
  };
  // Function to handle edit button click
  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
    setOpen(true);
  }

  // Function to handle delete button click
  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  // Effect to load data from local storage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  // Effect to save data to local storage whenever entries change
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);
  const count = entries.length; 
  //retrieve salary data from entries
  const salaryTotal = entries.map((entry) => entry.salary).reduce((acc, curr) => acc + parseInt(curr), 0);

  //computing the base pay from salary which is per annum
  const basePay = entries.map((entry) => entry.salary /12);
  console.log(basePay);

  //format salaryTotal to currency
  const salaryFormat = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency:"INR",
  }).format(salaryTotal);

  return (
    <div className='bg-slate-100 h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard count={count} company={company} setCompany={setCompany} salaryFormat={salaryFormat} entries={entries} formData={formData} handleInputChange={handleInputChange} handleSubmitF={handleSubmitF} handleDelete={handleDelete} handleEdit={handleEdit} editIndex={editIndex} opem={opem} setOpen={setOpen}/>}/>
        <Route path='/register' element={<RegisterForm name={name} setName={setName} email={email} setEmail={setEmail} company={company} setCompany={setCompany} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} handleSubmit={handleSubmit} />}/>
        <Route path='/employee/:id' element={<EmployeeDetail entries={entries} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
