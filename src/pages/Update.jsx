import React from 'react'
import Navbar from '../components/Navbar'

const Update = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-decoration-underline text-center my-5'>Update Student</h1>

            <div className='d-flex justify-content-center align-items-center'>
                <form action="" className='w-50 p-5 border rounded shadow'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Update