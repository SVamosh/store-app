
import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'dark' ? document.body.classList.add('dark')
                         : document.body.classList.remove('dark');
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}