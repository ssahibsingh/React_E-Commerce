

import React, { useState } from 'react';
import { Footer, Navbar, SubmitButton } from '../components';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebase-config';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleSubmit = async (e) => {
        setRegistrationStatus('');
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
                                Email is associated with existing account
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
                                    pattern=".{6,}" 
                                    title="Password should be at least 6 characters"
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
                                <SubmitButton inputs={[{ value: fullName }, { value: email }, { value: password }]} />
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