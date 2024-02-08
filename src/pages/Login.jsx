import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { logIn } from '../firebase-config';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await logIn(email, password);
          setLoginStatus('success');
          setEmail('');
          setPassword('');
      } catch (error) {
          setLoginStatus('error');
      }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          {loginStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                  Incorrect e-mail and password combination enterted
              </div>
          )}
          {loginStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                  User successfully logged in
              </div>
          )}
          <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
