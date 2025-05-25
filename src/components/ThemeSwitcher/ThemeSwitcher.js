
import './style.css';
import React, { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { ThemeContext } from './../../services/ThemeProvider';

function ThemeSwitcher() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
      <ToggleButtonGroup
       color="warning"
       sx={{marginRight: '20px'}}
       value={theme}
       exclusive
       aria-label="Platform"
       onClick={toggleTheme}
      >
      <ToggleButton value="light"
        sx={{color: '#FFFFFF'}}>
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="dark" 
        sx={{color: '#FFFFFF'}}>
        <NightlightIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export { ThemeSwitcher };