// src/contexts/ThemeContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { createAppTheme } from '../theme/theme'; // Import your custom theme

// Define the context type
type ThemeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

// Custom hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State to track current theme mode
  const [mode, setMode] = useState<PaletteMode>('light');

  // Load saved theme preference from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Function to toggle between light and dark modes
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      // Save to localStorage
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  // Create the theme based on current mode using your custom theme function
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Create the context value
  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
