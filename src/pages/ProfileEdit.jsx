
import React, { useState, useEffect } from 'react';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FaPlus } from "react-icons/fa";
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import Sidebar from '../components/Sidebar/Sidebar';

import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from '../components/Loader/Loader';

const ProfileEdit = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userId: '',
        email: '',
        mobile: '',
        dateOfBirth: '',
        location: '',
        designation: '',
        briefBio: '',
        fullBio: '',
    });

    const [experiences, setExperiences] = useState([]);

    const [educations, setEducations] = useState([]);

    const addMoreExperience = () => {
        setExperiences([{ designation: '', years: '', type: 'Year' }, ...experiences]);
    };

    const addMoreEducation = () => {
        setEducations([{ instituteName: '', educationType: '' }, ...educations]);
    };

    // Add these new functions for handling deletions and reordering
    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const deleteEducation = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };

    const moveExperience = (index, direction) => {
        if ((direction === 'up' && index === 0) ||
            (direction === 'down' && index === experiences.length - 1)) return;

        const newExperiences = [...experiences];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        [newExperiences[index], newExperiences[newIndex]] =
            [newExperiences[newIndex], newExperiences[index]];
        setExperiences(newExperiences);
    };

    const moveEducation = (index, direction) => {
        if ((direction === 'up' && index === 0) ||
            (direction === 'down' && index === educations.length - 1)) return;

        const newEducations = [...educations];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        [newEducations[index], newEducations[newIndex]] =
            [newEducations[newIndex], newEducations[index]];
        setEducations(newEducations);
    };



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                alert('Please login first');
                setIsLoading(false);
                return;
            }

            try {
                const userDocRef = doc(db, 'users', user.email);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();

                    // Convert Timestamp back to date string for the input
                    const dateOfBirth = userData.dateOfBirth ?
                        new Date(userData.dateOfBirth.seconds * 1000).toISOString().split('T')[0] :
                        '';

                    // Update form data
                    setFormData({
                        firstName: userData.firstName || '',
                        lastName: userData.lastName || '',
                        userId: userData.userId || '',
                        email: userData.email || '',
                        mobile: userData.mobile || '',
                        dateOfBirth: dateOfBirth,
                        location: userData.location || '',
                        designation: userData.designation || '',
                        briefBio: userData.briefBio || '',
                        fullBio: userData.fullBio || '',
                    });

                    // Update experiences if they exist
                    if (userData.experience && userData.experience.length > 0) {
                        // Map the document data to match our experience fields
                        const mappedExperience = userData.experience.map(exp => ({
                            designation: exp.heading || '',
                            years: exp.subHeading || '',
                            type: 'Year',
                            companyLogo: exp.imageUrl || ''
                        }));
                        setExperiences(mappedExperience);
                    } else {
                        // If no experiences exist, initialize with one empty field
                        setExperiences([{ designation: '', years: '', companyLogo: '' }]);
                    }

                    if (userData.education && userData.education.length > 0) {
                        // Map the document data to match our experience fields
                        const mappedEducation = userData.education.map(edu => ({
                            instituteName: edu.heading || '',
                            educationType: edu.subHeading || '',
                            instituteLogo: edu.imageUrl || ''
                        }));
                        setEducations(mappedEducation);
                    } else {
                        // If no experiences exist, initialize with one empty field
                        setEducations([{ instituteName: '', educationType: '', instituteLogo: '' }]);
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('Error fetching user data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);


    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = experiences.map((exp, i) => {
            if (i === index) {
                return { ...exp, [field]: value };
            }
            return exp;
        });
        setExperiences(updatedExperiences);
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducations = educations.map((edu, i) => {
            if (i === index) {
                return { ...edu, [field]: value };
            }
            return edu;
        });
        setEducations(updatedEducations);
    };

    const handleBasicInfoSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert('Please login first');
            return;
        }

        try {
            const userDocRef = doc(db, 'users', user.email);

            // Convert date string to Firebase Timestamp
            const dateOfBirthTimestamp = formData.dateOfBirth ?
                Timestamp.fromDate(new Date(formData.dateOfBirth)) :
                null;

            await setDoc(userDocRef, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                userId: formData.userId,
                email: formData.email,
                mobile: formData.mobile,
                dateOfBirth: dateOfBirthTimestamp,
                location: formData.location,
                designation: formData.designation,
                briefBio: formData.briefBio,
                fullBio: formData.fullBio,
            }, { merge: true });

            alert('Basic information updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };


    // Handle experience form submission
    const handleExperienceSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert('Please login first');
            return;
        }

        try {
            const userDocRef = doc(db, 'users', user.email);
            // Map the experiences back to the document structure
            const mappedExperience = experiences.map(exp => ({
                heading: exp.designation,
                subHeading: exp.years,
                imageUrl: exp.companyLogo
            }));

            await setDoc(userDocRef, {
                experience: mappedExperience
            }, { merge: true });

            alert('Experience information updated successfully!');
        } catch (error) {
            console.error('Error updating experience:', error);
            alert('Error updating experience');
        }
    };

    // Handle education form submission
    const handleEducationSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert('Please login first');
            return;
        }

        try {
            const userDocRef = doc(db, 'users', user.email);
            // Use educations array instead of experiences
            const mappedEducation = educations.map(edu => ({
                heading: edu.instituteName,
                subHeading: edu.educationType,
                imageUrl: edu.instituteLogo
            }));

            await setDoc(userDocRef, {
                education: mappedEducation
            }, { merge: true });

            alert('Education information updated successfully!');
        } catch (error) {
            console.error('Error updating Education:', error);
            alert('Error updating Education');
        }
    };


    return (
        <>

            <Header title="Profile" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />

            <Sidebar />


            {isLoading ? (
                <Loader />
            ) : (

                <div id="app-content">
                    {/* Container fluid */}
                    <div className="app-content-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    {/* Page header */}
                                    <div className=" mb-5">
                                        <h3 className="mb-0 fw-bold">Profile Edit</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-8">

                                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                    {/* card */}
                                    <div className="card">
                                        {/* card body */}
                                        <div className="card-body">
                                            <div className=" mb-6">
                                                <h4 className="mb-1">General</h4>
                                            </div>
                                            <div className="row align-items-center mb-8">
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    <h5 className="mb-0">Profile</h5>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="d-flex align-items-center mb-4">
                                                        <div>
                                                            <img className="image  avatar avatar-lg rounded-circle" src={avatar11} alt="Image" />
                                                        </div>
                                                        <div className="file-upload btn btn-outline-white ms-4">
                                                            <input type="file" className="file-input opacity-0" />Upload Photo
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col */}
                                            <div className="row mb-8">
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    {/* heading */}
                                                    <h5 className="mb-0">Brief Bio</h5>
                                                </div>
                                                <div className="col-md-9">
                                                    {/* text area */}
                                                    <textarea
                                                        className="form-control mb-3 border-dashed"
                                                        rows="3"
                                                        placeholder="Add your brief bio here..."
                                                        id="briefBio"
                                                        value={formData.briefBio}
                                                        onChange={handleInputChange}
                                                    />
                                                    {/* <button type="submit" className="btn btn-outline-white">Save</button> */}
                                                </div>
                                            </div>
                                            {/* col */}
                                            <div className="row mb-8">
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    {/* heading */}
                                                    <h5 className="mb-0">Full Bio</h5>
                                                </div>
                                                <div className="col-md-9">
                                                    {/* text area */}
                                                    <textarea
                                                        className="form-control mb-3 border-dashed"
                                                        rows="6"
                                                        placeholder="Add your full bio here..."
                                                        id="fullBio"
                                                        value={formData.fullBio}
                                                        onChange={handleInputChange}
                                                    />
                                                    {/* <button type="submit" className="btn btn-outline-white">Save</button> */}
                                                </div>
                                            </div>
                                            <div>
                                                {/* border */}
                                                <div className="mb-6">
                                                    <h4 className="mb-1">Basic information</h4>
                                                </div>
                                                <form onSubmit={handleBasicInfoSubmit}>
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="fullName" className="col-sm-4 col-form-label form-label">Full name</label>
                                                        <div className="col-sm-4 mb-3 mb-lg-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                                id="firstName"
                                                                value={formData.firstName}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                                id="lastName"
                                                                value={formData.lastName}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="ID" className="col-sm-4 col-form-label form-label">UserID</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control cursor-not-allowed"
                                                                placeholder="userID"
                                                                id="userId"
                                                                value={formData.userId}
                                                                disabled={true}
                                                            />
                                                            <p className="small mb-0 mt-3">User ID cannot be changed </p>
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="email" className="col-sm-4 col-form-label form-label">Email</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="email"
                                                                className="form-control cursor-not-allowed"
                                                                placeholder="Email"
                                                                id="email"
                                                                value={formData.email}
                                                                disabled={true}


                                                            />
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="mobile" className="col-sm-4 col-form-label form-label">mobile <span className="text-muted">(Optional)</span></label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="mobile"
                                                                id="mobile"
                                                                value={formData.mobile}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    {/* <div className="mb-3 row">
                                                    <label htmlFor="location" className="col-sm-4 col-form-label form-label">Location</label>
                                                    <div className="col-md-8 col-12">
                                                        <select className="form-select" id="location">
                                                            <option selected>Select Country</option>
                                                            <option value={1}>India</option>
                                                            <option value={2}>UK</option>
                                                            <option value={3}>USA</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="addressLine" className="col-sm-4 col-form-label form-label">Date of birth</label>
                                                        <div className="col-md-4 col-12">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="dateOfBirth"
                                                                value={formData.dateOfBirth}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    <div className="mb-3 row">
                                                        <label htmlFor="addressLineTwo" className="col-sm-4 col-form-label form-label">Location</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Your Location"
                                                                id="location"
                                                                value={formData.location}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                    <div className="row align-items-center">
                                                        <label htmlFor="zipcode" className="col-sm-4 col-form-label form-label">Designation <i data-feather="info" className="me-2 icon-xs" /></label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Your current Designation"
                                                                id="designation"
                                                                value={formData.designation}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="offset-md-4 col-md-8 mt-4">
                                                            <button type="submit" className="btn btn-primary" onClick={handleBasicInfoSubmit}>
                                                                Save Changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-8">

                                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                    {/* card */}
                                    <div className="card">
                                        {/* card body */}
                                        <div className="card-body">
                                            <div className=" mb-6">
                                                <h4 className="mb-1">Experience</h4>
                                            </div>
                                            <form onSubmit={handleExperienceSubmit}>
                                                {experiences.map((exp, index) => (
                                                    <div key={index} className="mb-4 experience-data-fields-collection">

                                                        <div className="d-flex justify-content-end gap-2 mb-3">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-light"
                                                                onClick={() => moveExperience(index, 'up')}
                                                                disabled={index === 0}
                                                            >
                                                                ↑
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-light"
                                                                onClick={() => moveExperience(index, 'down')}
                                                                disabled={index === experiences.length - 1}
                                                            >
                                                                ↓
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => deleteExperience(index)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>

                                                        <div className="row mb-3">
                                                            <label className="col-sm-4 col-form-label form-label">Designation</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Designation"
                                                                    value={exp.designation}
                                                                    onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row align-items-center mt-3">
                                                            <label className="col-sm-4 col-form-label form-label">Years of Experience</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter company logo URL"
                                                                    value={exp.years}
                                                                    onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mt-3">
                                                            <label className="col-sm-4 col-form-label form-label">Company Logo URL</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter company logo URL"
                                                                    value={exp.companyLogo}
                                                                    onChange={(e) => handleExperienceChange(index, 'companyLogo', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        {index !== experiences.length - 1 && <hr className="my-4" />}
                                                    </div>
                                                ))}

                                                <div className="row">
                                                    <div className="col-12">
                                                        <button
                                                            type="button"
                                                            className="btn btn-light d-flex align-items-center gap-2"
                                                            onClick={addMoreExperience}
                                                        >
                                                            <FaPlus size={16} />
                                                            Add More Experience
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr style={{ marginTop: '40px', opacity: '0.2' }} />
                                                <div className="offset-md-4 col-md-8 mt-4">
                                                    <button type="submit" className="btn btn-primary" onSubmit={handleExperienceSubmit}>
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="row mb-8">

                                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                    {/* card */}
                                    <div className="card">
                                        {/* card body */}
                                        <div className="card-body">
                                            <div className=" mb-6">
                                                <h4 className="mb-1">Education</h4>
                                            </div>
                                            <form onSubmit={handleEducationSubmit}>
                                                {educations.map((edu, index) => (
                                                    <div key={index} className="mb-4">

                                                        <div className="d-flex justify-content-end gap-2 mb-3">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-light"
                                                                onClick={() => moveEducation(index, 'up')}
                                                                disabled={index === 0}
                                                            >
                                                                ↑
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-light"
                                                                onClick={() => moveEducation(index, 'down')}
                                                                disabled={index === educations.length - 1}
                                                            >
                                                                ↓
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => deleteEducation(index)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>

                                                        <div className="row mb-3">
                                                            <label className="col-sm-4 col-form-label form-label">Institute Name</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Institute Name"
                                                                    value={edu.instituteName}
                                                                    onChange={(e) => handleEducationChange(index, 'instituteName', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row align-items-center">
                                                            <label className="col-sm-4 col-form-label form-label">Education Type</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Education Type ex. B.Tech, M.Tech, B.A , etc"
                                                                    value={edu.educationType}
                                                                    onChange={(e) => handleEducationChange(index, 'educationType', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="row align-items-center mt-3">
                                                            <label className="col-sm-4 col-form-label form-label">Institute Logo URL</label>
                                                            <div className="col-md-8 col-12">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter institute logo URL"
                                                                    value={edu.instituteLogo}
                                                                    onChange={(e) => handleEducationChange(index, 'instituteLogo', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        {index !== educations.length - 1 && <hr className="my-4" />}

                                                    </div>
                                                ))}

                                                <div className="row">
                                                    <div className="col-12">
                                                        <button
                                                            type="button"
                                                            className="btn btn-light d-flex align-items-center gap-2"
                                                            onClick={addMoreEducation}
                                                        >
                                                            <FaPlus size={16} />
                                                            Add More Education
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr style={{ marginTop: '40px', opacity: '0.2' }} />
                                                <div className="offset-md-4 col-md-8 mt-4">
                                                    <button type="submit" className="btn btn-primary" onSubmit={handleEducationSubmit}>
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>








                            <div className="row">

                                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                    {/* card */}
                                    <div className="card mb-6">
                                        {/* card body */}
                                        <div className="card-body">
                                            <div className="mb-6">
                                                <h4 className="mb-1">Danger Zone </h4>
                                            </div>
                                            <div>
                                                {/* text */}
                                                <p>All your data, files, and submissions will be deleted and cannot be recovered.</p>
                                                <a href="#" className="btn btn-danger">Delete Account</a>
                                                <p className="small mb-0 mt-3">Feel free to contact with any <a href="#">contact@ezstaff.com</a> questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )}



        </>

    )
}

export default ProfileEdit;