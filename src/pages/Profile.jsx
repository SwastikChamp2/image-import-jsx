import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import '../CSS/main.css';


// Image Imports
import logo2 from '../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import giftbox from '../assets/images/background/giftbox.png';
import checkedmark from '../assets/images/svg/checked-mark.svg';
import brandlogo1 from '../assets/images/svg/brand-logo-1.svg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import brandlogo2 from '../assets/images/svg/brand-logo-2.svg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import avatar5 from '../assets/images/avatar/avatar-5.jpg';
import avatar6 from '../assets/images/avatar/avatar-6.jpg';
import brandlogo3 from '../assets/images/svg/brand-logo-3.svg';
import avatar7 from '../assets/images/avatar/avatar-7.jpg';
import avatar8 from '../assets/images/avatar/avatar-8.jpg';
import avatar9 from '../assets/images/avatar/avatar-9.jpg';
import brandlogo4 from '../assets/images/svg/brand-logo-4.svg';
import avatar10 from '../assets/images/avatar/avatar-10.jpg';
import avatar12 from '../assets/images/avatar/avatar-12.jpg';
import brandlogo5 from '../assets/images/svg/brand-logo-5.svg';
import avatar13 from '../assets/images/avatar/avatar-13.jpg';
import avatar14 from '../assets/images/avatar/avatar-14.jpg';
import avatar15 from '../assets/images/avatar/avatar-15.jpg';
import blogimg4 from '../assets/images/blog/blog-img-4.jpg';
import ProfileCard from '../components/Cards/ProfileCard';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import useSidebarToggle from '../hooks/SidebarToggle';
import ProfileOverview from '../components/Profile/ProfileOverview';
import ProfileFiles from '../components/Profile/ProfileFiles';



const Profile = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userID, setUserID] = useState('');

  useSidebarToggle();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, 'users', user.email));

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || '');
            setLastName(userData.lastName || '');
            setUserID(userData.userID || '');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <>

      <main id="main-wrapper" className="main-wrapper">
        <Header title="Profile" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
        {/* navbar vertical */}
        {/* Sidebar */}
        <Sidebar />

        <div id="app-content">
          {/* Container fluid */}
          <div className="app-content-area">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  {/* Bg */}
                  <div className="pt-20 rounded-top cover-banner-profile" />
                  <div className="card rounded-bottom rounded-0 smooth-shadow-sm mb-5">
                    <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                      <div className="d-flex align-items-center">
                        {/* avatar */}
                        <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                          <img src={avatar11} className="avatar-xxl
                rounded-circle border border-2 " alt="Image" />
                          {/* <a href="#!" className="position-absolute top-0 right-0 me-2">
                            <img src={checkedmark} alt="Image" className="icon-sm" />
                          </a> */}
                        </div>
                        {/* text */}
                        <div className="lh-1">
                          <h2 className="mb-0">
                            {firstName} {lastName}
                            <a href="#!" className="text-decoration-none">
                            </a>
                          </h2>
                          <p className="mb-0 d-block">@{userID}</p>
                        </div>
                      </div>
                      <div>
                        <a href="/profile-edit" className="btn btn-outline-primary d-none d-md-block cursor-pointer">Edit Profile</a>
                      </div>
                    </div>
                    {/* nav */}
                    <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                          onClick={() => setActiveTab('overview')}
                          href="#"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === 'files' ? 'active' : ''}`}
                          onClick={() => setActiveTab('files')}
                          href="#"
                        >
                          Files
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* tab content */}
              {activeTab === 'overview' ? <ProfileOverview /> : <ProfileFiles />}
            </div>
          </div>
        </div>


      </main>
    </>

  )
}

export default Profile;