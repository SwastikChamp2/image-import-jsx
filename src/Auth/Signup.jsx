import React, { useState } from "react";
import logo2 from "../assets/images/brand/logo/logo-2.svg";
import AuthRedirect from "../Routing/AuthRedirect";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { db } from "../firebase";  // Make sure db is exported from your firebase config
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import "../CSS/main.css";


const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        userId: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        const { userId, email, password, confirmPassword } = formData;

        if (!userId || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(userCredential.user, { displayName: userId });

            await setDoc(doc(db, "users", email), {
                createdOn: serverTimestamp(),
                firstName: "",
                lastName: "",
                email: email,
                userID: userId,
                briefBio: "",
                fullBio: "",
                profilePic: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
                mobile: "",
                dateOfBirth: serverTimestamp(),
                location: "",
                designation: "",
                // Additional fields from profile
                coverImage: "",
                socialLinks: {
                    twitter: "",
                    facebook: "",
                    instagram: "",
                    linkedin: "",
                    github: ""
                },
                skills: [],
                education: [],
                experience: [],
                projects: [],
                certificates: [],
                languages: [],
                interests: []
            });


            await sendEmailVerification(user);

            setSuccess("Verification email sent. Please check your inbox.");
            navigate("/email-confirmation")
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AuthRedirect />
            <main className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center g-0 min-vh-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                        {/* Card */}
                        <div className="card smooth-shadow-md">
                            <div className="card-body p-6">
                                <div className="mb-4 text-center">
                                    <img src={logo2} alt="Logo" className="mb-2" />
                                    <p>Please enter your details to sign up.</p>
                                </div>
                                {/* Error Message */}
                                {error && <div className="alert alert-danger">{error}</div>}
                                {success && <div className="alert alert-success">{success}</div>}
                                {/* Signup Form */}
                                <form onSubmit={handleSignup}>
                                    <div className="mb-3">
                                        <label htmlFor="userId" className="form-label">User ID</label>
                                        <input
                                            type="text"
                                            id="userId"
                                            name="userId"
                                            className="form-control"
                                            placeholder="User Name"
                                            value={formData.userId}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="position-relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                className="form-control pe-5"
                                                placeholder="********"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn position-absolute top-50 end-0 translate-middle-y"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    padding: '0.375rem 0.75rem'
                                                }}
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <div className="position-relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className="form-control pe-5"
                                                placeholder="********"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn position-absolute top-50 end-0 translate-middle-y"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    padding: '0.375rem 0.75rem'
                                                }}
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    {/* Terms Agreement */}
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="agreeCheck" required />
                                        <label className="form-check-label" htmlFor="agreeCheck">
                                            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                                        </label>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                            {loading ? "Signing Up..." : "Create Account"}
                                        </button>
                                    </div>
                                    {/* Links */}
                                    <div className="d-md-flex justify-content-between mt-4">
                                        <a onClick={() => navigate("/signin")} className="fs-5 cursor-pointer">Already a member? Sign in</a>
                                        <a onClick={() => navigate("/forgot-password")} className="fs-5 cursor-pointer">Forgot Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Signup;
