import React, { useState, useEffect } from 'react';
import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import ProfileCard from '../Cards/ProfileCard';
import Loader from '../Loader/Loader';


const ProfileOverview = () => {


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [profilesData, setProfilesData] = useState([]);
    const [educationData, setEducationData] = useState([]);


    // const handlePushToFirestore = async () => {
    //     try {
    //         const user = auth.currentUser;
    //         if (!user) {
    //             throw new Error('No authenticated user found');
    //         }

    //         const userDocRef = doc(db, 'users', user.email);
    //         await updateDoc(userDocRef, {
    //             experience: profilesData2,
    //             education: educationData2,
    //             briefBio: profileData1.briefBio,
    //             designation: profileData1.designation,
    //             mobile: profileData1.mobile,
    //             dateOfBirth: profileData1.dateOfBirth,
    //             email: profileData1.email,
    //             location: profileData1.location,
    //             fullBio: profileData1.fullBio
    //         });

    //         alert('Data successfully pushed to Firestore!');
    //     } catch (error) {
    //         console.error('Error pushing data to Firestore:', error);
    //         alert('Error pushing data to Firestore: ' + error.message);
    //     }
    // };

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) {
            console.log('No authenticated user found');
            return;
        }

        const userDocRef = doc(db, 'users', user.email);
        getDoc(userDocRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    console.log('Full Document Data:', docSnapshot.data());
                } else {
                    console.log('No document found');
                }
            })
            .catch((error) => {
                console.error('Error fetching document:', error);
            });
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) {
            setError('No authenticated user found');
            setLoading(false);
            return;
        }

        // Create real-time listener
        const userDocRef = doc(db, 'users', user.email);
        const unsubscribe = onSnapshot(userDocRef,
            (doc) => {
                if (doc.exists()) {
                    const userData = doc.data();

                    // Convert Timestamp to string if it exists
                    const dateOfBirth = userData.dateOfBirth
                        ? new Date(userData.dateOfBirth.seconds * 1000).toLocaleDateString()
                        : '';

                    setProfileData({
                        briefBio: userData.briefBio || '',
                        designation: userData.designation || '',
                        mobile: userData.mobile || '',
                        dateOfBirth: dateOfBirth,
                        email: userData.email || user.email,
                        location: userData.location || '',
                        fullBio: userData.fullBio || ''
                    });

                    // Ensure experience and education are arrays, even if empty
                    setProfilesData(Array.isArray(userData.experience) ? userData.experience : []);
                    setEducationData(Array.isArray(userData.education) ? userData.education : []);
                    setLoading(false);
                } else {
                    setError('User profile not found');
                    setLoading(false);
                }
            },
            (error) => {
                setError('Error fetching user data: ' + error.message);
                setLoading(false);
            }
        );

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;
    if (!profileData) return <div>No profile data found</div>;






    return (
        <div>
            {/* row */}
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="mb-0">About Me</h4>
                        </div>
                        <div className="card-body">
                            <h5 className="text-uppercase">Bio</h5>
                            <p className="mt-2 mb-6">{profileData.briefBio}</p>
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <h5 className="text-uppercase">Position</h5>
                                    <p className="mb-0">{profileData.designation}</p>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">Mobile</h5>
                                    <p className="mb-0">{profileData.mobile}</p>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">Date of Birth</h5>
                                    <p className="mb-0">{new Date(profileData.dateOfBirth).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Email</h5>
                                    <p className="mb-0">{profileData.email}</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Location</h5>
                                    <p className="mb-0">{profileData.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">About Me</h4>
                        </div>
                        <div className="card-body" style={{ minHeight: '396px' }}>
                            <div className="d-md-flex justify-content-between align-items-center mb-4">
                                <p className="mt-2 mb-6">
                                    {profileData.fullBio.split('\n\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <br /><br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Experience" profiles={profilesData} />
                </div>


                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Education" profiles={educationData} />
                </div>

                {/* <button
                    className="btn btn-primary"
                    onClick={handlePushToFirestore}
                >
                    Push to Firebase
                </button> */}







            </div>
        </div>
    );
};

export default ProfileOverview;