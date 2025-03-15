import React from 'react';

const ProfileCard = ({ title, profiles }) => {
    return (
        <div className="card mb-5">
            <div className="card-header">
                <h4 className="mb-0">{title}</h4>
            </div>
            <div className="card-body">
                {profiles.map((profile, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-4">
                        <div className="d-flex align-items-center">
                            <div>
                                <img src={profile.imageUrl} className="rounded-circle avatar-md" alt="Profile" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-1">{profile.heading}</h5>
                                <p className="text-muted mb-0 fs-5">{profile.subHeading}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;
