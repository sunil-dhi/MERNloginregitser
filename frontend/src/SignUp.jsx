import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min0=.css'

const SignUp = () => {
    const [name, setName]=useState("sunnu")
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/register",{name,email,password})
        .then(result=>{console.log(result)
        navigate("/login")
        }
        
        )
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" id='name'  placeholder='your name' name='name' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" id='email'  placeholder='your email' name='email' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" id='password' placeholder='your password' name='password' className='form-control' autoComplete='off'/>
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