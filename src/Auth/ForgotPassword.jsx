import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthRedirect from "../Routing/AuthRedirect";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import '../CSS/main.css';
import logo2 from '../assets/images/brand/logo/logo-2.svg';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent! Check your inbox.");
        } catch (err) {
            setError("Failed to send reset email. Check the email entered.");
        }

        setLoading(false);
    };

    return (
        <>
            <AuthRedirect />
            <main className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center g-0 min-vh-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                        <div className="card smooth-shadow-md">
                            <div className="card-body p-5">
                                <div className="mb-4">
                                    <a href="#"><img src={logo2} className="mb-2 text-inverse" alt="Logo" /></a>
                                    <p className="mb-6">Enter your email, and we'll send you a reset link.</p>
                                </div>
                                <form onSubmit={handlePasswordReset}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {message && <p className="text-success">{message}</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    <div className="mb-3 d-grid">
                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                            {loading ? "Sending..." : "Reset Password"}
                                        </button>
                                    </div>
                                    <span>
                                        Sign in once you reset your password &nbsp;
                                        <a onClick={() => navigate('/signin')} className="text-primary cursor-pointer">Sign in</a>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ForgotPassword;
