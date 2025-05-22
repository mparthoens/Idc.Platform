import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';

/**
 * ShowcaseSection - Container for each section of the theme showcase
 * Provides consistent spacing and styling for each showcase section
 */
export const ShowcaseSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

/**
 * SectionTitle - Styled Typography for section headings
 * Provides consistent styling for section titles
 */
export const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * ComponentGroup - Container for grouping related components
 * Provides consistent spacing and layout for component groups
 */
export const ComponentGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

/**
 * ColorBox - Box for displaying theme colors
 * Shows color samples with labels
 */
export const ColorBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  fontSize: '0.875rem',
  fontWeight: 500,
}));

/**
 * CarouselContainer - Container for the carousel component
 * Provides positioning context for carousel slides and controls
 */
export const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}));

/**
 * CarouselSlide - Container for each carousel slide
 * Handles the styling and animation of carousel slides
 */
export const CarouselSlide = styled(Box)(({ theme }) => ({
  width: '100%',
  transition: 'transform 0.5s ease',
}));

/**
 * CarouselButton - Navigation buttons for the carousel
 * Styled buttons for previous and next slide navigation
 */
export const CarouselButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

/**
 * TabPanel - Container for tab content
 * Handles the display of content for each tab
 */
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ padding: '16px' }}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
