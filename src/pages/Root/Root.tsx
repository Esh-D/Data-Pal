import React from 'react';
import { Outlet } from "react-router-dom";

import './root.css'
import Drawer from '../../components/Drawer/Drawer.tsx';

const Root = () => {
  return (
    <>
      <Drawer />
      <Outlet />
    </>
  )
}

export default Root;