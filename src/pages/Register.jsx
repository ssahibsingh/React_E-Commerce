
import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';
import { auth, registerUser } from '../firebase-config';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            setRegistrationStatus('success');
            setFullName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setRegistrationStatus('error');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        {registrationStatus === 'error' && (
                            <div className="alert alert-danger" role="alert">
                                E-mail is associated with an existing account
                            </div>
                        )}
                        {registrationStatus === 'success' && (
                            <div className="alert alert-success" role="alert">
                                User successfully registered
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-decoration-underline text-info">
                                        Login
                                    </Link>{' '}
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
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

export default Register;

// import React, {useState} from 'react'
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';
// import { auth, registerUser } from '../firebase-config';

// const Register = () => {
//     const [fullName, setFullName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         registerUser(email, password)
//         console.log(fullName, email, password, "fhu")
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div class="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form onSubmit={handleSubmit}>
//                             <div class="form my-3">
//                                 <label for="Name">Full Name</label>
//                                 <input
//                                     type="name"
//                                     class="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                     onChange={(e) => setFullName(e.target.value)}
//                                 />
//                             </div>
//                             <div class="form my-3">
//                                 <label for="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </div>
//                             <div class="form  my-3">
//                                 <label for="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     class="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button className="my-2 mx-auto btn btn-dark" type="submit">
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Register