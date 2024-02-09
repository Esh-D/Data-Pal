import React from 'react';
import { Outlet } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './root.css'
//import Drawer from '../../components/Drawer/Drawer.tsx';

const Root = () => {
  const navigateToPage = (label:string) => {
    //convert to URL format
    label.toLowerCase();
    let url:string = label.split(" ").join("-");

    //navigate to page using React Router useNavigate hook and url
  }

  return (
    <>
      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Dashboard', 'Daily Survey', 'Templates', 'Entries', 'Insights'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={navigateToPage(text)} >
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet />
    </>
  )
}

export default Root;