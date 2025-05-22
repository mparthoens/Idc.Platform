import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery, Box, Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CarouselContainer,
  CarouselImage,
  CarouselImageWrapper,
  ContentWrapper,
  PageContainer,
  // Add the new styled components
  SearchSectionContainer,
  SearchSectionWrapper,
  SearchSectionTitle,
  SearchSectionSubtitle
} from './Home.styled';

// Import the ChipSearchForm component
import ChipSearchForm from '../../components/forms/ChipSearchForm';

// Import your own images
import dog01Image from '../../assets/images/carousel/dog01.jpg';
import dog02Image from '../../assets/images/carousel/dog02.png';
import cat01Image from '../../assets/images/carousel/cat01.jpg';
import cat02Image from '../../assets/images/carousel/cat02.png';
import horse01Image from '../../assets/images/carousel/horse01.jpg';
import turtle01Image from '../../assets/images/carousel/turtle01.jpg';
import parrot01Image from '../../assets/images/carousel/parrot01.png';
import eagle01Image from '../../assets/images/carousel/eagle01.jpg';
import ferret01Image from '../../assets/images/carousel/ferret01.jpg';
import fish01Image from '../../assets/images/carousel/fish01.jpg';
import rabbitImage from '../../assets/images/carousel/rabbit01.jpg';

/** Original array of companion animal images for the carousel */
const originalAnimalImages = [
  {
    url: dog01Image,
    alt: 'Dog'
  },
  {
    url: dog02Image,
    alt: 'Dog'
  },
  {
    url: cat01Image,
    alt: 'Cat'
  },
  {
    url: cat02Image,
    alt: 'Cat'
  },
  {
    url: horse01Image,
    alt: 'Horse'
  },
  {
    url: turtle01Image,
    alt: 'Turtle'
  },
  {
    url: parrot01Image,
    alt: 'Parrot'
  },
  {
    url: eagle01Image,
    alt: 'Eagle'
  },
  {
    url: ferret01Image,
    alt: 'Ferret'
  },
  {
    url: fish01Image,
    alt: 'Fish'
  },
  {
    url: rabbitImage,
    alt: 'rabbit'
  }
];

/**
 * Fisher-Yates (Knuth) shuffle algorithm to randomize array
 * @param array The array to shuffle
 * @returns A new shuffled array
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/** Home Component */
const Home: React.FC = () => {
  // Create a randomized array of images on component mount
  const [animalImages] = useState(() => shuffleArray(originalAnimalImages));
  
  // Start with a random image index
  const [currentImageIndex, setCurrentImageIndex] = useState(
    () => Math.floor(Math.random() * animalImages.length)
  );
  
  // State for search notification
  const [searchNotification, setSearchNotification] = useState({
    open: false,
    message: '',
    severity: 'info' as 'success' | 'info' | 'warning' | 'error'
  });
  
  const carouselIntervalRef = useRef<number | null>(null);
  const theme = useTheme();
  
  const isStacked = useMediaQuery(theme.breakpoints.down('lg'));
  
  useEffect(() => {
    carouselIntervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
    }, 5000);
    
    return () => {
      if (carouselIntervalRef.current !== null) {
        window.clearInterval(carouselIntervalRef.current);
      }
    };
  }, [animalImages.length]);

  // Handle chip search
  const handleChipSearch = (chipNumber: string) => {
    console.log('Searching for chip:', chipNumber);
    // In the future, this will call an API endpoint
    // For now, just show a notification
    setSearchNotification({
      open: true,
      message: `Searching for chip number: ${chipNumber}`,
      severity: 'info'
    });
  };

  // Handle closing the notification
  const handleCloseNotification = () => {
    setSearchNotification(prev => ({ ...prev, open: false }));
  };

  return (
    // Wrapper box with negative margin to counteract the MainLayout padding
    <Box sx={{
      margin: '-24px',
      marginLeft: { xs: '-24px', md: '-24px' }, // Counteract the padding
      width: 'calc(100% + 48px)',
      overflow: 'hidden'
    }}>
      <PageContainer>
        {/* Hero Section */}
        <ContentWrapper isStacked={isStacked}>
          <HeroContent>
            <HeroTitle>
              <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>All Companion Animals</span> Microchip Registration
            </HeroTitle>
            <HeroSubtitle>
              Protect your <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>beloved companion</span> with our <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>secure, reliable</span> microchip registration system. <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Reunite faster</span> if they ever go missing.
            </HeroSubtitle>
          </HeroContent>
          <CarouselContainer>
            {animalImages.map((image, index) => (
              <CarouselImageWrapper
                key={index}
                style={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  zIndex: index === currentImageIndex ? 1 : 0,
                }}
              >
                <CarouselImage
                  src={image.url}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </CarouselImageWrapper>
            ))}
          </CarouselContainer>
        </ContentWrapper>
        
        {/* Search Section */}
        <SearchSectionContainer>
          <SearchSectionWrapper>
            <SearchSectionTitle sx={{ color: theme.palette.primary.main }}>
              Find Animal & Owner Details
            </SearchSectionTitle>
            <SearchSectionSubtitle>
              Enter <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>microchip number</span> to access their information and verify registration status.
            </SearchSectionSubtitle>
            <ChipSearchForm onSearch={handleChipSearch} />
          </SearchSectionWrapper>
        </SearchSectionContainer>
      </PageContainer>
      
      {/* Notification for search results */}
      <Snackbar 
        open={searchNotification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={searchNotification.severity}
          sx={{ width: '100%' }}
        >
          {searchNotification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
