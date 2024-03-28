import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  
  const navigate = useNavigate()

  const api =`http://localhost:8000/students`



  const submitForm = (e) => {
    e.preventDefault()

    const formData = {id, name, email, phone}

    fetch(api, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then((res) => {
      alert("Student saved successfully")
      navigate(`/`)
    })
    .catch((err) => console.error(err))
  }

  return (
    <>
      <Navbar />
      <h1 className='text-decoration-underline text-center my-5'>Add Student</h1>

      <div className='d-flex justify-content-center align-items-center'>
      <form action="" className='w-50 p-5 border rounded shadow' onSubmit={submitForm}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
          <input value={id} onChange={(e) => setId(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      </div>
    </>
  )
}

export default Create