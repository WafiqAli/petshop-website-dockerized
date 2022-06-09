import React from 'react';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DashboardSidenav from '../../components/Dashboard/DashboardSidenav';
import PageHeader from '../../components/Dashboard/PageHeader';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div>
        <PageHeader />
        <div className='grid-container'>
            <DashboardHeader />
            <DashboardSidenav />
            <DashboardMain />
        </div>
    </div>
  )
}

export default Dashboard