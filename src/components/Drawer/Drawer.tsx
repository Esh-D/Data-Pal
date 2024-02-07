import React from 'react'
import { Link } from "react-router-dom";

import './drawer.css'

const Drawer = () => {
  return (
    <>
        <div>Drawer</div>
        <Link to={`dashboard`}>Dashboard</Link>
        <Link to={`daily-survey`}>Daily Survey</Link>
        <Link to={`templates`}>Templates</Link>
        <Link to={`entries`}>Entries</Link>
        <Link to={`insights`}>Insights</Link>
    </>
  )
}

export default Drawer;
//drawer will be collapsable - only shows icons on left in collapsed state
