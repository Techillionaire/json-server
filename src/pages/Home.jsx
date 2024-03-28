import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'


const Home = () => {
  const [studentData, setStudentData] = useState(null)

  const api = "http://localhost:8000/students"
  const fetchData = () => {
      fetch(api)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
      fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <div className="container ">
        <h1 className='text-center text-decoration-underline my-5'>CRUD OPERATION</h1>
        <a href='/create' className='btn btn-success mb-4'>Create +</a>

        <table className="table border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
           {
            studentData && studentData.map((student) => (
              <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <div className="icons-container">
                  <a href='/update' className="btn btn-primary me-3">Edit</a>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>

            ))
           }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home