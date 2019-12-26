import React from 'react';
import RouteControl from 'components/RouteControl';
import Download from 'components/Download';
import './Dashboard.scss';

const Dashboard = props => (
  <div className="dashboard">
    <h3>Route Builder</h3>
    <div className="routecontrol-wrapper">
      <RouteControl />
    </div>
    <div className="download-wrapper">
      <Download />
    </div>
  </div>
);

export default Dashboard;
