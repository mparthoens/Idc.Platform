// src/ThemeToggle.tsx
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Better dark mode icon
import LightModeIcon from '@mui/icons-material/LightMode'; // Better light mode icon
import { useThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

/**
 * ThemeToggle component
 *
 * A button that toggles between light and dark themes.
 * Shows appropriate icon based on current theme.
 */
const ThemeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const { t } = useTranslation();

  return (
    <Tooltip
      title={
        mode === 'light'
          ? t('theme.switchToDark', 'Switch to dark theme')
          : t('theme.switchToLight', 'Switch to light theme')
      }>
      <IconButton
        onClick={toggleColorMode}
        color='inherit'
        aria-label={
          mode === 'light'
            ? t('theme.switchToDark', 'Switch to dark theme')
            : t('theme.switchToLight', 'Switch to light theme')
        }>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
