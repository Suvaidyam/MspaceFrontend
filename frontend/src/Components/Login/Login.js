import React, { useState } from 'react'
import img from './img/profile-img.jpg'

const Login = () => {

  const [compantId, setcompanyId] = useState('')
  const [password, setpassword] = useState('')

  const getdata = () => {
    const data = { compantId, password }

    fetch('http//:localhost:4000/company/login', {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data)

    }).then((result) => {
      console.log(result)

    })
  }

  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 quote-section">
            <blockquote className="blockquote">
              <p className="blockquote-text">Faith is not belief without proof, but trust without reservation</p>
              <footer className="blockquote-footer">D. Elton Trueblood</footer>
            </blockquote>
          </div>
          <div className="col-sm-6 form-section">
            <div className="login-wrapper text-center">
              <img src={img} className="login-img" />
              <form action="#!">
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">CompanyId</label>
                  <input type="email" name="email" id="email" className="form-control" placeholder="Company id"
                    onChange={(e) => {
                      setcompanyId(e.target.value)

                    }} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input type="password" name="password" id="password" className="form-control" placeholder="*************" onChange={(e) => {
                    setpassword(e.target.value)

                  }} />
                </div>
                <input name="login" id="login" className="btn btn-block login-btn" type="button" defaultValue="LOGIN" onClick={() => { getdata() }} />
              </form>
              <a href="#!" className="forgot-password-link">Forgot Your Password?</a>
              <p className="login-wrapper-footer-text">Need an account? <a href="#!" className="text-reset">Signup here</a></p>
            </div>
            <footer>
              <nav className="footer-nav">
                <a href="#!">Terms of use.</a>
                <a href="#!">Privacy policy</a>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login