import React from 'react';
import DashboardLayout from '../components/Layouts/DashboardLayout';

const Dashboard = () => {
    return (
        <div>
            This is my Dashboard page
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}