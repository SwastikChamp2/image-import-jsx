import React from 'react';

// Image Imports
import logo2 from '../../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../../assets/images/avatar/avatar-11.jpg';
import checkedmark from '../../assets/images/svg/checked-mark.svg';
import ProfileCard from '../Cards/ProfileCard';
import SubmissionFileCard from '../Cards/SubmissionFileCard';

import blogimg4 from '../../assets/images/blog/blog-img-4.jpg';

const ProfileFiles = () => {

    const filesData = [
        {
            id: 'One',
            icon: 'bi-file-earmark-spreadsheet',
            name: 'Job Descriptions.xlsx',
            uploadedBy: 'HR Solutions Inc.',
            size: '213Kb',
            date: '12 June, 2023 04:15 pm'
        },
        {
            id: 'Two',
            icon: 'bi-file-earmark-word',
            name: 'Candidate Evaluation.doc',
            uploadedBy: 'HR Solutions Inc.',
            uploadDate: '17 Dec, 2023 06:39 am',
            size: '213Kb',
            date: '12 May, 2023 01:15 pm'
        },
        {
            id: 'Three',
            icon: 'bi-file-excel',
            name: 'Salary Analysis.xlsx',
            uploadedBy: 'HR Analytics Team',
            uploadDate: '17 Dec, 2023 06:39 am',
            size: '213Kb',
            date: '12 May, 2023 08:15 pm'
        },
        {
            id: 'Four',
            icon: 'bi-file-ppt',
            name: 'Recruitment Strategy.ppt',
            uploadedBy: 'HR Consulting Group',
            uploadDate: '17 Dec, 2023 06:39 am',
            size: '213mb',
            date: '12 May, 2023 02:15 pm'
        },
        {
            id: 'Five',
            icon: 'bi-file-text',
            name: 'Staffing Guidelines.txt',
            uploadedBy: 'HR Solutions Inc.',
            uploadDate: '17 Dec, 2023 06:39 am',
            size: '213mb',
            date: '12 May, 2023 01:15 pm'
        },
        {
            id: 'Six',
            icon: 'bi-file-earmark-play',
            name: 'Employee Onboarding.mov',
            uploadedBy: 'HR Training Services',
            uploadDate: '17 Dec, 2023 06:39 am',
            size: '500mb',
            date: '22 April, 2023 03:15 pm'
        }
    ];


    return (



        <div className="py-6">
            <div className="row">
                <div className="col-md-12 col-12">
                    {filesData.map(file => (
                        <SubmissionFileCard key={file.id} file={file} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProfileFiles;