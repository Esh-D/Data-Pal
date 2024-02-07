import React from 'react'
import { Link } from "react-router-dom";

import './dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Link to={`templates`}>Your Name</Link>
    </>
  )
}

export default Dashboard;