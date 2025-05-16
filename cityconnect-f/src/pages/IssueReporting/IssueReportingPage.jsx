import React from 'react';
import IssueReportingForm from './IssueReportingForm';

const IssueReportingPage = () => {
    return (
        <div className="p-4 sm:p-6 max-w-md sm:max-w-lg mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Report an Issue</h1>
            <IssueReportingForm />
        </div>
    );
};

export default IssueReportingPage;
