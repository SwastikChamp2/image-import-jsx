import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';

//Icons Import
import { BsSuitcaseLg } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

// Image Imports

import logo2 from '../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import giftboxBackground from '../assets/images/background/giftbox.png';
import brandLogo1 from '../assets/images/svg/brand-logo-1.svg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import brandLogo2 from '../assets/images/svg/brand-logo-2.svg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import avatar5 from '../assets/images/avatar/avatar-5.jpg';
import avatar6 from '../assets/images/avatar/avatar-6.jpg';
import brandLogo3 from '../assets/images/svg/brand-logo-3.svg';
import avatar7 from '../assets/images/avatar/avatar-7.jpg';
import avatar8 from '../assets/images/avatar/avatar-8.jpg';
import avatar9 from '../assets/images/avatar/avatar-9.jpg';
import brandLogo6 from '../assets/images/svg/brand-logo-6.svg';
import avatar10 from '../assets/images/avatar/avatar-10.jpg';
import brandLogo4 from '../assets/images/svg/brand-logo-4.svg';
import avatar12 from '../assets/images/avatar/avatar-12.jpg';
import brandLogo5 from '../assets/images/svg/brand-logo-5.svg';
import avatar13 from '../assets/images/avatar/avatar-13.jpg';
import avatar14 from '../assets/images/avatar/avatar-14.jpg';
import avatar15 from '../assets/images/avatar/avatar-15.jpg';
import SunburstChart from '../components/Chart/SunburstChart';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import useSidebarToggle from '../hooks/SidebarToggle';



const HomeDashboard = () => {

    const navigate = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false);
    useSidebarToggle();


    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <Header title="Home" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                {/* navbar vertical */}
                <Sidebar />
                {/* Page content */}
                <div id="app-content">
                    {/* Container fluid */}
                    <div className="app-content-area">
                        <div className="bg-primary pt-10 pb-21 mt-n6 mx-n4" />
                        <div className="container-fluid mt-n22">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    {/* Page header */}
                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                        <div className="mb-2 mb-lg-0">
                                            <h3 className="mb-0 text-white">Projects</h3>
                                        </div>
                                        <div>

                                            <a href="#!" className="btn btn-white d-flex align-items-center">

                                                Create New
                                                <BsChevronDown className="ms-2" />
                                            </a>




                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Projects</h4>
                                                </div>
                                                <div className="icon-shape icon-lg bg-primary-soft text-primary rounded-2">
                                                    <BsSuitcaseLg size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">18</h1>
                                                <p className="mb-0">
                                                    <span className="text-dark me-2">2</span> Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Active Task</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsListUl size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">132</h1>
                                                <p className="mb-0">
                                                    <span className="text-dark me-2">28</span> Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Employee</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsPeople size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">120</h1>
                                                {/* <p className="mb-0">
                                                    <span className="text-dark me-2">1</span> Completed
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Consultants</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsBullseye size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">76</h1>
                                                {/* <p className="mb-0">
                                                    <span className="text-success me-2">5%</span> Completed
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                <div className="col-xl-8 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">My Companies</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Company Name</th>
                                                            <th>Submissions</th>
                                                            <th>Type</th>
                                                            <th>Employees</th>
                                                            <th>Progress</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo1} alt="dash ui - bootstrap 5 admin dashboard template" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Allure Design Limited</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>34</td>
                                                            <td><span className="badge badge-normal-soft">Design</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar bootstrap 5" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="bootstrap 5 avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="bootstrap 5 avatar in circle" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">15%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo2} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Semno Technologies</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>47</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">35%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo4} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Capexo Tech Private Ltd</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>120</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar4} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar9} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">75%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo6} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Vector.io</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>89</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">63%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "63%" }} aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo4} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Collabin Consultancy</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>108</td>
                                                            <td><span className="badge badge-normal-soft">Consultancy</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar13} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar14} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar15} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">100%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo5} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a onClick={() => { navigate("/company-dashboard") }} className="text-inherit cursor-pointer">Remini Consultants</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>120</td>
                                                            <td><span className="badge badge-normal-soft">Consultancy</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar13} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar14} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar15} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">75%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* card footer  */}
                                        <div className="card-footer text-center">
                                            <a href="#!" className="btn btn-primary">View All Projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100">
                                        {/* card body  */}
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <div>
                                                <h4 className="mb-0">Organization Structure</h4>
                                            </div>

                                        </div>
                                        <div className="card-body">
                                            {/* chart  */}
                                            <div className="mb-6 d-flex justify-content-center">
                                                <SunburstChart />
                                            </div>
                                            {/* icon with content  */}
                                            <div className="d-flex align-items-center justify-content-around">
                                                <div className="text-center">
                                                    <i className="icon-sm text-success" data-feather="check-circle" />
                                                    <h1 className="fs-2 mb-0">100</h1>
                                                    <p>Total</p>
                                                </div>
                                                <div className="text-center">
                                                    <i className="icon-sm text-warning" data-feather="trending-up" />
                                                    <h1 className="fs-2 mb-0">60</h1>
                                                    <p>Pending</p>
                                                </div>
                                                <div className="text-center">
                                                    <i className="icon-sm text-danger" data-feather="trending-down" />
                                                    <h1 className="fs-2 mb-0">40</h1>
                                                    <p>Delayed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                {/* card  */}
                                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0">My Submission</h4>
                                            <div className="dropdown">
                                                <a className="btn btn-outline-white btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Deadline</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckOne" />
                                                                    <label className="form-check-label" htmlFor="flexCheckOne">Capexgo Staffing Requirement</label>
                                                                </div>
                                                            </td>
                                                            <td>Today</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckTwo" />
                                                                    <label className="form-check-label" htmlFor="flexCheckTwo">Hiring Tech Team for GCP</label>
                                                                </div>
                                                            </td>
                                                            <td>Yesterday</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckThree" />
                                                                    <label className="form-check-label" htmlFor="flexCheckThree">UI/UX Interns Sub Contractor Swiggy</label>
                                                                </div>
                                                            </td>
                                                            <td>16 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-warning-soft">In Progress</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckFour" />
                                                                    <label className="form-check-label" htmlFor="flexCheckFour">Interns for Kalari Capital</label>
                                                                </div>
                                                            </td>
                                                            <td>23 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckFive" />
                                                                    <label className="form-check-label" htmlFor="flexCheckFive">Management Team for Valuation</label>
                                                                </div>
                                                            </td>
                                                            <td>20 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckSix" />
                                                                    <label className="form-check-label" htmlFor="flexCheckSix">Inhouse Social Media Intern for Zepto</label>
                                                                </div>
                                                            </td>
                                                            <td>12 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckSeven" />
                                                                    <label className="form-check-label" htmlFor="flexCheckSeven">Market Research for Ionic Developers</label>
                                                                </div>
                                                            </td>
                                                            <td>11 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card  */}
                                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">Bulletin</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card" data-simplebar style={{ "max-height": "380px" }}>
                                                <table className="table text-nowrap mb-0 table-centered table-hover">

                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar2} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Anita Parmar</a></h5>
                                                                        <p className="mb-0">Subhash was submitted for Infotech through Viraj Ghosh</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar11} alt="Image" className="avatar-md avatar rounded-circle" style={{ width: '100%', height: 'auto' }} /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Jitu Chauhan</a></h5>
                                                                        <p className="mb-0">Jitu was added to team Research at Vector.io</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar3} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Surabhi Chauhan</a></h5>
                                                                        <p className="mb-0">Surabhi was added as the team lead for Team Development</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar4} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Mohit Kumar</a></h5>
                                                                        <p className="mb-0">Mohit Kumar was removed from Team Consultancy</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar5} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Subhash Naik</a></h5>
                                                                        <p className="mb-0">Subhash Added a Submission</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar6} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Darshini Nair</a></h5>
                                                                        <p className="mb-0">Darshini was added to Team Marketing in Capexgo </p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar5} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Subhash Naik</a></h5>
                                                                        <p className="mb-0">Subhash was submitted for Infotech</p>
                                                                    </div>
                                                                </div>
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

export default HomeDashboard;