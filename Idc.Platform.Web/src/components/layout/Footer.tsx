import React from 'react';
import { Box, Typography, Container, useTheme, alpha } from '@mui/material';

/**
 * Footer component
 *
 * Simple footer with copyright information.
 * Positioned at the bottom of the page.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box
      component='footer'
      sx={{
        py: 2.5,
        px: 2,
        mt: 'auto',
        backdropFilter: 'blur(10px)',
        backgroundColor: theme.palette.mode === 'light'
          ? alpha(theme.palette.background.paper, 0.8)
          : alpha(theme.palette.background.paper, 0.7),
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          sx={{
            fontSize: '0.875rem',
            opacity: 0.8,
            fontWeight: 400,
            letterSpacing: '0.01em',
          }}
        >
          {`© ${currentYear} - CSW Engineering - All rights reserved.`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
