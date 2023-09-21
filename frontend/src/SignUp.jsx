import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
// import 'bootstrap/dist/css/bootstrap.min0=.css'

const SignUp = () => {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()

    const handleSubmit=(e)=>{
        e.prevent.default()
        axios.post("",{name,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handeSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='your name' name='name' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='your email' name='email' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='your password' name='password' className='form-control' autoComplete='off'/>
                </div>
                <button className='btn btn-success'>SignUp</button>
                
            </form>
            <p>already have an account?</p>
            <Link to="/login" className='btn btn-defult'>Login</Link>
        </div>
    </div>
  )
}

export default SignUp