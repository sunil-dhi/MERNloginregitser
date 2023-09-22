import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min0=.css'

const Login = () => {
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=>{console.log(result)
          if(result.data==="success"){
            navigate("/home")

          }
        }
        
        )
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" id='email'  placeholder='your email' name='email' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" id='password' placeholder='your password' name='password' className='form-control' autoComplete='off'/>
                </div>
                <button className='btn btn-success'>Login</button>
            </form>
           
        </div>
    </div>
  )
}

export default Login