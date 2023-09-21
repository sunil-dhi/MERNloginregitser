import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min0=.css'

const SignUp = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='your name' name='name' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='your email' name='email' className='form-control' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='your password' name='password' className='form-control' autoComplete='off'/>
                </div>
                <button className='btn btn-success'>SignUp</button>
                <p>already have an account?</p>
            </form>
            <button className='btn btn-defult'>Login</button>
        </div>
    </div>
  )
}

export default SignUp