import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

interface ContentWrapperProps {
  isStacked?: boolean;
}

/** 
 * Container for the page content 
 * Uses absolute positioning to break out of the parent's padding 
 */
export const PageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: -24, // Negative of the parent's padding (p: 3 = 24px)
  width: 'calc(100% + 48px)', // 100% + left padding + right padding
  display: 'flex',
  flexDirection: 'column', 
  
  // Adjust for different screen sizes
  [theme.breakpoints.down('sm')]: {
    left: -16, // Smaller padding on mobile
    width: 'calc(100% + 32px)',
  },
}));

/** 
 * Wrapper for content to create the split layout 
 */
export const ContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isStacked'
})<ContentWrapperProps>(({ theme, isStacked }) => ({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(3, 3),
  gap: theme.spacing(5),
  flex: 1,
  alignItems: isStacked ? 'center' : 'flex-start',
 
  // Handle stacked layout (tablet and below)
  ...(isStacked && {
    flexDirection: 'column',
    gap: theme.spacing(0), // Reduced from 3 to 0
  }),
 
  [theme.breakpoints.down('lg')]: {
    maxWidth: '960px',
    gap: theme.spacing(3),
  },
 
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 3),
    gap: theme.spacing(2),
  },
 
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 2),
    gap: theme.spacing(1.5),
  },
}));

/** 
 * Container for the hero content (title and subtitle) 
 */
export const HeroContent = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(3),
 
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '700px',
    textAlign: 'center',
    marginBottom: theme.spacing(0), // Reduced from 2 to 0
    paddingTop: 0,
  },
 
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(0), // Reduced from 1.5 to 0
  },
 
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0), // Reduced from 1 to 0
  },
}));

/** 
 * Main title in the hero section with fluid typography and mixed colors 
 */
export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 'clamp(1.7rem, 1.1rem + 2vw, 3rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  lineHeight: 1.1,
 
  '& .highlight': {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
 
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
  },
}));

/** 
 * Subtitle in the hero section with fluid typography 
 */
export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 'clamp(1.1rem, 0.9rem + 0.8vw, 1.5rem)',
  color: theme.palette.text.secondary,
  marginBottom: 'clamp(0.5rem, 0.3rem + 0.5vw, 1rem)', // Reduced margin
  lineHeight: 1.5,
  letterSpacing: '0.01em',
 
  '& .highlight': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
 
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0), // Reduced from 2 to 0
  },
}));

/** 
 * Container for the carousel with aspect ratio preservation 
 */
export const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '35%', // Percentage width for desktop
  maxWidth: '300px', // Limit maximum size
  aspectRatio: '1/1',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px rgba(0,0,0,0.3)'
    : '0 10px 30px rgba(0,0,0,0.15)',
 
  '&::before': {
    content: '""',
    display: 'block',
    paddingTop: '100%',
  },
 
  // Responsive sizes
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '250px', // Smaller on large tablets
  },
 
  [theme.breakpoints.down('md')]: {
    maxWidth: '200px', // Smaller on tablets
  },
 
  [theme.breakpoints.down('sm')]: {
    maxWidth: '150px', // Smaller on mobile
    aspectRatio: '1/1',
    
    '&::before': {
      paddingTop: '100%',
    },
  },
 
  '@media (max-width: 400px)': {
    maxWidth: '100px', // Even smaller on very small screens
  },
 
  '@supports (aspect-ratio: 1/1)': {
    '&::before': {
      display: 'none',
    },
  },
}));

/** 
 * Wrapper for each carousel image 
 */
export const CarouselImageWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transition: 'opacity 1.5s ease-in-out',
});

/** 
 * Carousel image styling 
 */
export const CarouselImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  filter: theme.palette.mode === 'dark' ? 'brightness(0.85)' : 'none',
}));

// Add these new styled components to your existing Home.styled.ts file

/** 
 * Container for the search section 
 */
export const SearchSectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.mode === 'dark' 
    ? theme.palette.background.default 
    : theme.palette.grey[50],
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

/** 
 * Wrapper for the search section content 
 */
export const SearchSectionWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

/** 
 * Title for the search section 
 */
export const SearchSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 0.8rem + 1.2vw, 2rem)',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));


/** 
 * Subtitle for the search section 
 */
export const SearchSectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 0.8rem + 0.6vw, 1.25rem)',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  maxWidth: '800px',
}));



