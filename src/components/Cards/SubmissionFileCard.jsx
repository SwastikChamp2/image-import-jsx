import React from 'react';

// Image Imports
import logo2 from '../../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../../assets/images/avatar/avatar-11.jpg';
import checkedmark from '../../assets/images/svg/checked-mark.svg';
import ProfileCard from './ProfileCard';
import blogimg4 from '../../assets/images/blog/blog-img-4.jpg';

const SubmissionFileCard = ({ file }) => {
    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="row justify-content-between align-items-center">
                    <div className="d-flex col-lg-6 col-12 mb-4 mb-lg-0">
                        <div>
                            <i className={`bi ${file.icon} h2 text-muted`} />
                        </div>
                        <div className="ms-3">
                            <a href="#!">
                                <h5 className="mb-1">{file.name}</h5>
                            </a>
                            <p className="mb-0">
                                Uploaded by <a href="#!">{file.uploadedBy}</a>
                                {file.uploadDate && ` on ${file.uploadDate}`}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <span>{file.size}</span>
                    </div>
                    <div className="col">
                        <span>{file.date}</span>
                    </div>
                    <div className="col-auto">
                        <div className="dropdown dropstart">
                            <a href="#!" id={`dropdown${file.id}`} data-bs-toggle="dropdown"
                                className="btn btn-ghost btn-icon btn-sm rounded-circle"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="icon-xs" data-feather="more-vertical" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby={`dropdown${file.id}`}>
                                {/* ... existing dropdown menu items ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmissionFileCard;