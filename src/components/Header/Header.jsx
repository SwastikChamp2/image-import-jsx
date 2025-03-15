import React from 'react';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaPowerOff } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import logo2 from "../../assets/images/brand/logo/logo-2.svg";
import avatar11 from "../../assets/images/avatar/avatar-11.jpg";

const Header = ({ showDropdown, setShowDropdown, title }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/signin"); // Redirect to signin page after logout
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="header">
            <div className="navbar-custom navbar navbar-expand-lg">
                <div className="container-fluid top-navbar px-0">
                    <a className="navbar-brand d-block d-md-none" href="#!" style={{ width: '50%', height: '50%' }}>
                        <img src={logo2} alt="Logo-image" />
                    </a>
                    <a className="nav-link has-arrow d-flex align-items-center d-none d-md-flex" href="#!" style={{ fontSize: "1.2rem" }}>
                        <span>{title}</span>
                    </a>
                    <a
                        id="nav-toggle"
                        href="#!"
                        className="ms-auto ms-md-0 me-0 me-lg-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            fill="currentColor"
                            className="bi bi-text-indent-left text-muted"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>

                    <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
                        <li className="dropdown ms-2">
                            <a
                                className="rounded-circle"
                                href="#!"
                                role="button"
                                id="dropdownUser"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowDropdown(!showDropdown);
                                }}
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="avatar avatar-md avatar-indicators avatar-online">
                                    <img
                                        alt="avatar"
                                        src={avatar11}
                                        className="rounded-circle"
                                    />
                                </div>
                            </a>
                            {showDropdown && (
                                <div
                                    className="dropdown-menu dropdown-menu-end show"
                                    aria-labelledby="dropdownUser"
                                    style={{
                                        display: 'block',
                                        opacity: '1',
                                        visibility: 'visible',
                                        position: 'absolute',
                                        top: '100%',
                                        right: '0',
                                        left: 'auto',
                                    }}
                                >
                                    <div className="px-4 pb-0 pt-2">
                                        <div className="lh-1">
                                            <h5 className="mb-1">Jitu Chauhan</h5>
                                        </div>
                                        <div className="dropdown-divider mt-3 mb-2" />
                                    </div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center cursor-pointer" onClick={() => navigate('/profile')}>
                                                <span className='me-2'>
                                                    <FaUser />
                                                </span>
                                                View Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center cursor-pointer" onClick={() => navigate('/profile-edit')} >
                                                <span className='me-2'>
                                                    <MdModeEdit />
                                                </span>
                                                Edit Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center cursor-pointer" onClick={handleLogout} >
                                                <span className='me-2'>
                                                    <FaPowerOff />
                                                </span>
                                                Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;