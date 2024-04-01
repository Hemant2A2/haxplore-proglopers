import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container_form">
      <h2 className='heading'>Login</h2>
      <form id="loginForm">
        <div className="form-group-sty">
          <label  className="label00" for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group-sty">
          <label className="label00" for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="btttn00" type="submit">Login</button>
      </form>
      <div className="link">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
    </>
  )
}

export default Login
