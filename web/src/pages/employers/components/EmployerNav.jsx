/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ThemeProvider } from '@emotion/react';
import {
  AppBar, createTheme, IconButton, Toolbar,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import IndeedForEmployersSVG from '../../../components/svg/IndeedForEmployersSVG';
import { DarkAntTab, DarkAntTabs } from '../../../components/AntTabsDark';
import Button from '../../../components/Button';
import getLoginDetails from '../../../utils/getLoginDetails';
import { logout } from '../../../app/actions';

function appBarLabel() {
  const decoded = getLoginDetails();
  const history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0: history.push('/employee/hire'); break;
      case 1: history.push('/employee/dashboard'); break;
      default: history.push('/employee/hire'); break;
    }
  };

  useEffect(() => {
    const paths = location.pathname.split('/');
    if (paths.length > 2) {
      switch (paths[2]) {
        case 'dashboard': setValue(1);
          break;
        case 'hire': setValue(0);
          break;
        default: setValue(0);
          break;
      }
    }
  }, []);

  return (
    <Toolbar>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IndeedForEmployersSVG onClick={() => history.push('/employee/hire')} />
          </IconButton>
          <DarkAntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <DarkAntTab label="Post a job" />
            <DarkAntTab label="Dashboard" />
            {decoded ? (
              decoded.id ? (
                <Button
                  onClick={() => { dispatch(logout()); history.push('/login'); }}
                  style={{
                    height: '35px',
                    marginLeft: '1250px',
                    width: '100px',
                    marginTop: '5px',
                  }}
                  label="Sign out"
                />
              ) : (
                <Button
                  onClick={() => { dispatch(logout()); history.push('/login'); }}
                  style={{
                    height: '35px',
                    marginLeft: '1250px',
                    width: '100px',
                    marginTop: '5px',
                  }}
                  label="Sign in"
                />
              )
            ) : (
              <Button
                onClick={() => { dispatch(logout()); history.push('/login'); }}
                style={{
                  height: '35px',
                  marginLeft: '1250px',
                  width: '100px',
                  marginTop: '5px',
                }}
                label="Sign in"
              />
            )}
          </DarkAntTabs>
        </>
      </div>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function EmployerNav() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" sx={{ height: '52px' }}>
        {appBarLabel('default')}
      </AppBar>
    </ThemeProvider>
  );
}

export default EmployerNav;
