import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

/**
 * LanguageSwitcher component provides a dropdown menu for changing the application language.
 * It displays the current language and allows users to select from available languages.
 *
 * @returns {JSX.Element} Rendered LanguageSwitcher component
 */
const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  // State for controlling the dropdown menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Available languages with their codes and translated names
  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'fr', name: t('language.fr') },
    { code: 'nl', name: t('language.nl') },
    { code: 'de', name: t('language.de') },
  ];

  /**
   * Gets the display name of the currently selected language
   *
   * @returns {string} The name of the current language
   */
  const getCurrentLanguageName = () => {
    const currentLang = languages.find((lang) => lang.code === i18n.language);
    return currentLang ? currentLang.name : languages[0].name;
  };

  /**
   * Opens the language dropdown menu
   *
   * @param {React.MouseEvent<HTMLElement>} event - The click event
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Closes the language dropdown menu
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Changes the application language and closes the dropdown
   *
   * @param {string} languageCode - The language code to switch to
   */
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Language selector button */}
      <Button
        color='inherit'
        onClick={handleClick}
        startIcon={<TranslateIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          minWidth: 'auto',
          px: 1,
        }}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}>
        {/* Display current language name */}
        <Typography
          variant='body2'
          sx={{ ml: 0.5 }}>
          {getCurrentLanguageName()}
        </Typography>
      </Button>

      {/* Language selection dropdown menu */}
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'language-button',
          },
        }}>
        {/* Menu items for each available language */}
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            selected={i18n.language === language.code}>
            <Typography>{language.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
