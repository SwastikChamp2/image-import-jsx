import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { MdHome } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";

// Image imports
import logo2 from "../assets/images/brand/logo/logo-2.svg";
import avatar11 from "../assets/images/avatar/avatar-11.jpg";
import avatar2 from "../assets/images/avatar/avatar-2.jpg";
import avatar3 from "../assets/images/avatar/avatar-3.jpg";
import avatar4 from "../assets/images/avatar/avatar-4.jpg";
import avatar5 from "../assets/images/avatar/avatar-5.jpg";
import avatar6 from "../assets/images/avatar/avatar-6.jpg";
import giftbox from "../assets/images/background/giftbox.png";
import brandLogo from "../assets/images/brand/logo/logo-2.svg";
import LineBarChart from '../components/Chart/LineBarChart';
import DonutChart from '../components/Chart/DoghnutChart';
import MultiRingChart from '../components/Chart/MultiRingChart';
import Sidebar from '../components/Sidebar/Sidebar';
import useSidebarToggle from '../hooks/SidebarToggle';

const CompanyDashboard = () => {

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    useSidebarToggle();



    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <Header title="Company" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />

                <Sidebar />
                {/* Page Content */}
                <div id="app-content">
                    <div className="app-content-area">
                        <div className="container-fluid">
                            <div className="bg-white mx-n6 mt-n6 pt-6 mb-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        {/* Page header */}
                                        <div className="d-lg-flex align-items-center justify-content-between mb-6 px-6">
                                            <div className="mb-6 mb-lg-0">
                                                <div className="d-flex align-items-center">

                                                    <div className="ms-4">
                                                        <h1 className="mb-0 h3 ">
                                                            Allure Design Ltd
                                                        </h1>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            {/* nav  */}
                                            <ul className="nav nav-lb-tab px-6">

                                                <li className="nav-item mx-3">
                                                    <a className="nav-link active" href="#!">
                                                        Overview
                                                    </a>
                                                </li>

                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Files
                                                    </a>
                                                </li>
                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Team
                                                    </a>
                                                </li>
                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Employee
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Task Summary</h4>
                                                </div>
                                                {/* dropdown  */}




                                            </div>


                                            {/* text center  */}
                                            <div className=" mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-primary mb-0
                "
                                                >
                                                    50
                                                </h3>
                                                {/* <p className="mb-0">Total Task Count</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">In Progress</h4>
                                                </div>

                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-info mb-0
                "
                                                >
                                                    12
                                                </h3>
                                                {/* <p className="mb-0 ">
                                                    <span className="text-dark ">6</span> In Progress
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Completed</h4>
                                                </div>


                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-success mb-0
                "
                                                >
                                                    30
                                                </h3>
                                                {/* <p className="mb-0">
                                                    <span className="text-dark ">8</span> Today Completed
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Overdue </h4>
                                                </div>


                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-danger mb-0
                "
                                                >
                                                    8
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                <div className="col-xl-8 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card">
                                        {/* card body  */}
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0">Task Summary</h4>
                                            </div>
                                            {/* dropdown  */}
                                            <div>
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">New vs. Closed</p>
                                            {/* chart  */}
                                            <LineBarChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0 ">Task Completion Status</h4>
                                            </div>
                                            <div>
                                                {/* dropdown  */}
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        {/* card body  */}
                                        <div className="card-body">
                                            {/* chart  */}
                                            <DonutChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-12 mb-5 mb-xl-0">
                                    {/* card  */}
                                    <div className="card h-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0">Submission Completion</h4>
                                            </div>
                                            <div>
                                                {/* dropdown  */}
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        {/* card body  */}
                                        <div className="card-body d-flex justify-content-center">
                                            {/* chart  */}
                                            <MultiRingChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-12 mb-5 mb-xl-0">
                                    {/* card  */}
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">Recent Submissions</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Submission</th>
                                                            <th>Submitted on</th>
                                                            <th>Status</th>
                                                            <th>Company</th>
                                                            <th>Employee</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Tech Intern List</td>
                                                            <td>Mar, 03 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-primary-soft"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>
                                                            <td>Sonico</td>
                                                            <td>Rakesh Singh</td>


                                                        </tr>
                                                        <tr>
                                                            <td>Approved Candidates</td>
                                                            <td>Mar, 03 2024</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-info-soft"
                                                                >
                                                                    In Progress
                                                                </span>
                                                            </td>
                                                            <td>Capexgo</td>
                                                            <td>Mohit Sharma</td>


                                                        </tr>
                                                        <tr>
                                                            <td>HR Interview Notes</td>
                                                            <td>Mar 16, 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-danger-soft "
                                                                >
                                                                    Cancel
                                                                </span>
                                                            </td>
                                                            <td>Vector.io</td>
                                                            <td>Mohini Singh</td>


                                                        </tr>
                                                        <tr>
                                                            <td> Financial Overview  </td>
                                                            <td>Mar 18, 2023</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  "
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>
                                                            <td> Stema Consultancy  </td>
                                                            <td>Alok Kumar</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Investor Pitch PPT</td>
                                                            <td>Mar 18, 2023</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  text-primary"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>

                                                            <td>Capexgo Tech</td>

                                                            <td>
                                                                Naresh Patel
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td>Meeting Summary</td>
                                                            <td>Mar 20, 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  text-primary"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>

                                                            <td>Capexgo Tech</td>

                                                            <td>
                                                                Mohak Patel
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>

    )
}

export default CompanyDashboard;