import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="container_form">
      <h2>Sign Up</h2>
      <form id="signupForm" onsubmit="return validateForm()">
        <div className="form-group-sty">
          <label className="label00" for="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        <div className="form-group-sty">
          <label className="label00" for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label className="label00" for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="btttn00" type="submit">Sign Up</button>
      </form>
      <div className="link">
        <p>Already have an account? <a href="index.html">Log in</a></p>
      </div>
    </div>
    </>
  )
}

export default SignUp
