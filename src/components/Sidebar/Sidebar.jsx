import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie, FaUser } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import logo2 from "../../assets/images/brand/logo/logo-2.svg";

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar-vertical navbar nav-dashboard">
            <div className="h-100" data-simplebar="">
                <a className="navbar-brand" href="#!">
                    <img
                        src={logo2}
                        alt="dash ui - bootstrap 5 admin dashboard template"
                    />
                </a>
                <ul className="navbar-nav flex-column" id="sideNavbar">
                    <li className="nav-item">
                        <a className="nav-link has-arrow d-flex align-items-center cursor-pointer" onClick={() => { navigate("/dashboard") }} style={{ fontSize: "1.2rem" }}>
                            <span className="nav-icon me-4 icon-xxs mb-3">
                                <MdHome />
                            </span>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link has-arrow d-flex align-items-center cursor-pointer" href="#!" style={{ fontSize: "1.2rem" }}>
                            <span className="nav-icon me-4 icon-xxs mb-3">
                                <AiOutlineFileText />
                            </span>
                            <span>Submissions</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link has-arrow d-flex align-items-center cursor-pointer" href="#!" style={{ fontSize: "1.2rem" }}>
                            <span className="nav-icon me-4 icon-xxs mb-3">
                                <HiUserGroup />
                            </span>
                            <span>Vendors</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link has-arrow d-flex align-items-center cursor-pointer" href="#!" style={{ fontSize: "1.2rem" }}>
                            <span className="nav-icon me-4 icon-xxs mb-3">
                                <FaUserTie />
                            </span>
                            <span>Consultants</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link has-arrow d-flex align-items-center cursor-pointer" href="#!" style={{ fontSize: "1.2rem" }}>
                            <span className="nav-icon me-4 icon-xxs mb-3">
                                <FaUser />
                            </span>
                            <span>Employees</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;