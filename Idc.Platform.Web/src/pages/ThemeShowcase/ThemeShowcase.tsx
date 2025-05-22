import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Avatar,
  Alert,
  CircularProgress,
  LinearProgress,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Delete as DeleteIcon,
  Pets as PetsIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

import {
  ShowcaseSection,
  SectionTitle,
  ComponentGroup,
  ColorBox,
  CarouselContainer,
  CarouselSlide,
  CarouselButton,
  TabPanel,
} from './ThemeShowcase.styled';

/**
 * Sample animal images for carousel
 * These images are used to demonstrate the carousel component
 * with companion animal photos
 */
const animalImages = [
  {
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    title: 'Dog',
    description: 'A loyal companion and man\'s best friend.',
  },
  {
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    title: 'Cat',
    description: 'An independent and graceful pet.',
  },
  {
    url: 'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25',
    title: 'Rabbit',
    description: 'A gentle and quiet companion.',
  },
  {
    url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca',
    title: 'Bird',
    description: 'A colorful and melodious pet.',
  },
];

/**
 * ThemeShowcase Component
 * 
 * This component showcases the application's theme and Material UI components.
 * It serves as a visual reference for designers and developers.
 * 
 * Note: As specified in the requirements, text in this component is hardcoded
 * and does not use i18n translation.
 */
const ThemeShowcase: React.FC = () => {
  // Access theme
  const theme = useTheme();
  
  // State for interactive components
  const [tabValue, setTabValue] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  
  // Ref for the carousel interval
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set up automatic carousel rotation
  useEffect(() => {
    if (autoPlay) {
      carouselIntervalRef.current = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
      }, 2000);
    }
    
    // Clean up interval on component unmount or when autoPlay changes
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [autoPlay]);

  // Pause autoplay when user interacts with carousel
  const pauseAutoPlay = () => {
    setAutoPlay(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Event handlers
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleNextSlide = () => {
    pauseAutoPlay();
    setCarouselIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
  };

  const handlePrevSlide = () => {
    pauseAutoPlay();
    setCarouselIndex((prevIndex) => (prevIndex - 1 + animalImages.length) % animalImages.length);
  };

  const handleDotClick = (index: number) => {
    pauseAutoPlay();
    setCarouselIndex(index);
  };

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Page Header */}
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Theme Showcase
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 6 }}>
        A comprehensive showcase of UI components and design elements used in the ID Chips application.
      </Typography>

      {/* Typography Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Typography</SectionTitle>
        
        <Typography variant="h1" gutterBottom>h1. Heading</Typography>
        <Typography variant="h2" gutterBottom>h2. Heading</Typography>
        <Typography variant="h3" gutterBottom>h3. Heading</Typography>
        <Typography variant="h4" gutterBottom>h4. Heading</Typography>
        <Typography variant="h5" gutterBottom>h5. Heading</Typography>
        <Typography variant="h6" gutterBottom>h6. Heading</Typography>
        
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </ShowcaseSection>

      {/* Buttons Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Buttons</SectionTitle>
        
        {/* Contained Buttons */}
        <Typography variant="h6" gutterBottom>Contained Buttons</Typography>
        <ComponentGroup>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" disabled>Disabled</Button>
        </ComponentGroup>
        
        {/* Outlined Buttons */}
        <Typography variant="h6" gutterBottom>Outlined Buttons</Typography>
        <ComponentGroup>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="success">Success</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="info">Info</Button>
          <Button variant="outlined" color="warning">Warning</Button>
          <Button variant="outlined" disabled>Disabled</Button>
        </ComponentGroup>
        
        {/* Text Buttons */}
        <Typography variant="h6" gutterBottom>Text Buttons</Typography>
        <ComponentGroup>
          <Button variant="text">Default</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="success">Success</Button>
          <Button variant="text" color="error">Error</Button>
          <Button variant="text" color="info">Info</Button>
          <Button variant="text" color="warning">Warning</Button>
          <Button variant="text" disabled>Disabled</Button>
        </ComponentGroup>
        
        {/* Button Sizes */}
        <Typography variant="h6" gutterBottom>Button Sizes</Typography>
        <ComponentGroup>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </ComponentGroup>
        
        {/* Icon Buttons */}
        <Typography variant="h6" gutterBottom>Icon Buttons</Typography>
        <ComponentGroup>
          <IconButton aria-label="favorite">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="pets" color="secondary">
            <PetsIcon />
          </IconButton>
          <IconButton aria-label="pets" color="error" disabled>
            <PetsIcon />
          </IconButton>
        </ComponentGroup>
        
        {/* Buttons with Icons */}
        <Typography variant="h6" gutterBottom>Buttons with Icons</Typography>
        <ComponentGroup>
          <Button variant="contained" startIcon={<FavoriteIcon />}>
            With Icon
          </Button>
          <Button variant="outlined" endIcon={<PetsIcon />}>
            With Icon
          </Button>
        </ComponentGroup>
      </ShowcaseSection>

      {/* Form Controls Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Form Controls</SectionTitle>
        
        {/* Text Fields */}
        <Typography variant="h6" gutterBottom>Text Fields</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Filled" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Outlined" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Disabled" disabled fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Error" error helperText="Error message" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="With Helper Text" helperText="Helper text" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Password" type="password" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Read Only" defaultValue="Read only value" InputProps={{ readOnly: true }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Required" required fullWidth />
          </Grid>
        </Grid>

        {/* Select Fields */}
        <Typography variant="h6" gutterBottom>Select Fields</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="simple-select-label">Animal</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                label="Animal"
                defaultValue="dog"
              >
                <MenuItem value="dog">Dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="rabbit">Rabbit</MenuItem>
                <MenuItem value="bird">Bird</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth variant="filled">
              <InputLabel id="filled-select-label">Animal</InputLabel>
              <Select
                labelId="filled-select-label"
                id="filled-select"
                label="Animal"
                defaultValue="dog"
                variant="filled"
              >
                <MenuItem value="dog">Dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="rabbit">Rabbit</MenuItem>
                <MenuItem value="bird">Bird</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth disabled>
              <InputLabel id="disabled-select-label">Animal</InputLabel>
              <Select
                labelId="disabled-select-label"
                id="disabled-select"
                label="Animal"
                defaultValue="dog"
                disabled
              >
                <MenuItem value="dog">Dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="rabbit">Rabbit</MenuItem>
                <MenuItem value="bird">Bird</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Checkboxes */}
        <Typography variant="h6" gutterBottom>Checkboxes</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox />} label="Default" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
                      </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox disabled checked />} label="Disabled Checked" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox color="primary" />} label="Primary" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox color="secondary" />} label="Secondary" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox color="success" />} label="Success" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Checkbox color="error" />} label="Error" />
          </Grid>
        </Grid>

        {/* Radio Buttons */}
        <Typography variant="h6" gutterBottom>Radio Buttons</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <FormControl>
              <RadioGroup defaultValue="dog" name="radio-buttons-group">
                <FormControlLabel value="dog" control={<Radio />} label="Dog" />
                <FormControlLabel value="cat" control={<Radio />} label="Cat" />
                <FormControlLabel value="rabbit" control={<Radio />} label="Rabbit" />
                <FormControlLabel value="bird" control={<Radio />} label="Bird" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <RadioGroup row defaultValue="dog" name="radio-buttons-group-row">
                <FormControlLabel value="dog" control={<Radio color="primary" />} label="Dog" />
                <FormControlLabel value="cat" control={<Radio color="secondary" />} label="Cat" />
                <FormControlLabel value="rabbit" control={<Radio color="success" />} label="Rabbit" />
                <FormControlLabel value="bird" control={<Radio color="error" />} label="Bird" disabled />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Switches */}
        <Typography variant="h6" gutterBottom>Switches</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch />} label="Default" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch disabled />} label="Disabled" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch disabled checked />} label="Disabled Checked" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch color="primary" />} label="Primary" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch color="secondary" />} label="Secondary" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch color="success" />} label="Success" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Switch color="error" />} label="Error" />
          </Grid>
        </Grid>

        {/* Sliders */}
        <Typography variant="h6" gutterBottom>Sliders</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%' }}>
              <Typography id="continuous-slider" gutterBottom>
                Continuous Slider
              </Typography>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%' }}>
              <Typography id="discrete-slider" gutterBottom>
                Discrete Slider
              </Typography>
              <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%' }}>
              <Typography id="disabled-slider" gutterBottom>
                Disabled Slider
              </Typography>
              <Slider
                defaultValue={30}
                aria-labelledby="disabled-slider"
                disabled
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%' }}>
              <Typography id="colored-slider" gutterBottom>
                Colored Slider
              </Typography>
              <Slider
                defaultValue={30}
                aria-labelledby="colored-slider"
                color="secondary"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
        </Grid>
      </ShowcaseSection>

      {/* Data Display Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Data Display</SectionTitle>
        
        {/* Cards */}
        <Typography variant="h6" gutterBottom>Cards</Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Basic Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Basic Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a simple card with just content. Cards contain content and actions about a single subject.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Card with Actions */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Card with Actions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card has action buttons at the bottom.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" color="primary">Action</Button>
              </CardActions>
            </Card>
          </Grid>
          
          {/* Media Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={animalImages[0].url}
                alt={animalImages[0].title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {animalImages[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {animalImages[0].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          
          {/* Outlined Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Outlined Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card has an outlined variant instead of the default elevated appearance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Elevated Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={8}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Elevated Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card has a custom elevation level of 8.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Colored Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: 'primary.light', color: 'primary.contrastText' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Colored Card
                </Typography>
                <Typography variant="body2">
                  This card has a custom background color from the theme palette.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Lists */}
        <Typography variant="h6" gutterBottom>Lists</Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Basic List */}
          <Grid item xs={12} md={6}>
            <Paper>
              <List>
                <ListItem>
                  <ListItemText primary="Dog" secondary="A loyal companion" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Cat" secondary="An independent pet" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Rabbit" secondary="A gentle animal" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Bird" secondary="A melodious friend" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          
          {/* List with Icons */}
          <Grid item xs={12} md={6}>
            <Paper>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PetsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Dog" secondary="A loyal companion" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <PetsIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Cat" secondary="An independent pet" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <PetsIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Rabbit" secondary="A gentle animal" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <PetsIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary="Bird" secondary="A melodious friend" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
                {/* Chips */}
        <Typography variant="h6" gutterBottom>Chips</Typography>
        <Paper sx={{ p: 2 }}>
          <Grid container spacing={1}>
            {/* Basic Chips */}
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Basic Chips</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Basic" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Info" color="info" />
                <Chip label="Warning" color="warning" />
              </Box>
            </Grid>
            
            {/* Outlined Chips */}
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Outlined Chips</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Basic" variant="outlined" />
                <Chip label="Primary" color="primary" variant="outlined" />
                <Chip label="Secondary" color="secondary" variant="outlined" />
                <Chip label="Success" color="success" variant="outlined" />
                <Chip label="Error" color="error" variant="outlined" />
                <Chip label="Info" color="info" variant="outlined" />
                <Chip label="Warning" color="warning" variant="outlined" />
              </Box>
            </Grid>
            
            {/* Clickable and Deletable Chips */}
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Interactive Chips</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Clickable" onClick={() => alert('Chip clicked')} />
                <Chip label="Deletable" onDelete={() => alert('Chip deleted')} />
                <Chip 
                  label="Clickable & Deletable" 
                  onClick={() => alert('Chip clicked')} 
                  onDelete={() => alert('Chip deleted')} 
                  color="primary"
                />
                <Chip label="Disabled" disabled />
              </Box>
            </Grid>
            
            {/* Avatar Chips */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>Avatar Chips</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip 
                  avatar={<Avatar>D</Avatar>} 
                  label="Dog" 
                  color="primary"
                />
                <Chip 
                  avatar={<Avatar>C</Avatar>} 
                  label="Cat" 
                  color="secondary"
                />
                <Chip 
                  avatar={<Avatar>R</Avatar>} 
                  label="Rabbit" 
                  color="success"
                />
                <Chip 
                  avatar={<Avatar>B</Avatar>} 
                  label="Bird" 
                  color="error"
                />
                <Chip 
                  avatar={<Avatar><PetsIcon /></Avatar>} 
                  label="With Icon" 
                  color="info"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </ShowcaseSection>

      {/* Feedback Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Feedback</SectionTitle>
        
        {/* Alerts */}
        <Typography variant="h6" gutterBottom>Alerts</Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert severity="info">This is an info alert — check it out!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="success">
              This is a success outlined alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert variant="filled" severity="error">
              This is an error filled alert — check it out!
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Alert 
              severity="info" 
              action={
                <Button color="inherit" size="small">
                  UNDO
                </Button>
              }
            >
              This is an alert with an action button.
            </Alert>
          </Grid>
        </Grid>
        
        {/* Progress */}
        <Typography variant="h6" gutterBottom>Progress Indicators</Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>Circular Progress</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CircularProgress />
              <CircularProgress color="secondary" />
              <CircularProgress color="success" />
              <CircularProgress color="error" />
              <CircularProgress color="info" />
              <CircularProgress color="warning" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom>Circular Progress with Value</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CircularProgress variant="determinate" value={25} />
              <CircularProgress variant="determinate" value={50} color="secondary" />
              <CircularProgress variant="determinate" value={75} color="success" />
              <CircularProgress variant="determinate" value={100} color="error" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Linear Progress</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress sx={{ mb: 2 }} />
              <LinearProgress color="secondary" sx={{ mb: 2 }} />
              <LinearProgress color="success" sx={{ mb: 2 }} />
              <LinearProgress color="error" sx={{ mb: 2 }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Linear Progress with Value</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={25} sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={50} color="secondary" sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={75} color="success" sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={100} color="error" sx={{ mb: 2 }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Buffer Progress</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="buffer" value={30} valueBuffer={60} sx={{ mb: 2 }} />
              <LinearProgress variant="buffer" value={50} valueBuffer={80} color="secondary" sx={{ mb: 2 }} />
            </Box>
          </Grid>
        </Grid>
      </ShowcaseSection>

      {/* Navigation Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Navigation</SectionTitle>
        
        {/* Tabs */}
        <Typography variant="h6" gutterBottom>Tabs</Typography>
        <Paper sx={{ width: '100%', mb: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="basic tabs example"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Dogs" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Cats" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="Rabbits" id="tab-2" aria-controls="tabpanel-2" />
            <Tab label="Birds" id="tab-3" aria-controls="tabpanel-3" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves.
            They have been bred by humans for a long time, and were the first animals ever to be domesticated.
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            Cats are small carnivorous mammals. They are often called house cats when kept as indoor pets.
            Cats have been associated with humans for at least 9,500 years.
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            Rabbits are small mammals in the family Leporidae of the order Lagomorpha.
            Oryctolagus cuniculus includes the European rabbit species and its descendants.
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            Birds are a group of warm-blooded vertebrates constituting the class Aves, characterized by feathers,
            toothless beaked jaws, the laying of hard-shelled eggs, and lightweight but strong skeletons.
          </TabPanel>
        </Paper>
        
        {/* Breadcrumbs */}
        <Typography variant="h6" gutterBottom>Breadcrumbs</Typography>
        <Paper sx={{ p: 2, mb: 4 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Animals
            </Link>
            <Typography color="text.primary">Dogs</Typography>
          </Breadcrumbs>
          
          <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="#"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="#"
            >
              <PetsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Animals
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <PetsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dogs
            </Typography>
          </Breadcrumbs>
        </Paper>
                {/* Carousel */}
        <Typography variant="h6" gutterBottom>Carousel</Typography>
        <Paper sx={{ mb: 4, overflow: 'hidden' }}>
          <CarouselContainer>
            <CarouselSlide>
              <Box sx={{ position: 'relative' }}>
                <img 
                  src={animalImages[carouselIndex].url} 
                  alt={animalImages[carouselIndex].title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h5">{animalImages[carouselIndex].title}</Typography>
                  <Typography variant="body2">{animalImages[carouselIndex].description}</Typography>
                </Box>
              </Box>
            </CarouselSlide>
            <CarouselButton onClick={handlePrevSlide} sx={{ left: 8 }}>
              <ChevronLeftIcon />
            </CarouselButton>
            <CarouselButton onClick={handleNextSlide} sx={{ right: 8 }}>
              <ChevronRightIcon />
            </CarouselButton>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              {animalImages.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    m: 0.5,
                    borderRadius: '50%',
                    bgcolor: index === carouselIndex ? 'primary.main' : 'grey.400',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={autoPlay}
                    onChange={(e) => setAutoPlay(e.target.checked)}
                    color="primary"
                  />
                }
                label="Auto Play"
              />
            </Box>
          </CarouselContainer>
        </Paper>
      </ShowcaseSection>

      {/* Theme Colors Section */}
      <ShowcaseSection>
        <SectionTitle variant="h4">Theme Colors</SectionTitle>
        
        {/* Primary Colors */}
        <Typography variant="h6" gutterBottom>Primary Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="primary.light" color="primary.contrastText">
              primary.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="primary.main" color="primary.contrastText">
              primary.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="primary.dark" color="primary.contrastText">
              primary.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Secondary Colors */}
        <Typography variant="h6" gutterBottom>Secondary Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="secondary.light" color="secondary.contrastText">
              secondary.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="secondary.main" color="secondary.contrastText">
              secondary.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="secondary.dark" color="secondary.contrastText">
              secondary.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Error Colors */}
        <Typography variant="h6" gutterBottom>Error Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="error.light" color="error.contrastText">
              error.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="error.main" color="error.contrastText">
              error.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="error.dark" color="error.contrastText">
              error.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Warning Colors */}
        <Typography variant="h6" gutterBottom>Warning Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="warning.light" color="warning.contrastText">
              warning.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="warning.main" color="warning.contrastText">
              warning.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="warning.dark" color="warning.contrastText">
              warning.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Info Colors */}
        <Typography variant="h6" gutterBottom>Info Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="info.light" color="info.contrastText">
              info.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="info.main" color="info.contrastText">
              info.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="info.dark" color="info.contrastText">
              info.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Success Colors */}
        <Typography variant="h6" gutterBottom>Success Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="success.light" color="success.contrastText">
              success.light
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="success.main" color="success.contrastText">
              success.main
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="success.dark" color="success.contrastText">
              success.dark
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Grey Colors */}
        <Typography variant="h6" gutterBottom>Grey Colors</Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="grey.100" color="text.primary">
              grey.100
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="grey.300" color="text.primary">
              grey.300
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="grey.500" color="common.white">
              grey.500
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="grey.700" color="common.white">
              grey.700
            </ColorBox>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <ColorBox bgcolor="grey.900" color="common.white">
              grey.900
            </ColorBox>
          </Grid>
        </Grid>
        
        {/* Text Colors */}
        <Typography variant="h6" gutterBottom>Text Colors</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography color="text.primary">text.primary</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography color="text.secondary">text.secondary</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography color="text.disabled">text.disabled</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, bgcolor: 'grey.900' }}>
              <Typography color="text.primary" sx={{ color: 'common.white' }}>
                On dark background
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </ShowcaseSection>
      
      {/* Theme Toggle */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={toggleTheme}
          startIcon={themeMode === 'light' ? <SettingsIcon /> : <SettingsIcon />}
        >
          Toggle Theme Mode ({themeMode})
        </Button>
      </Box>
      
      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 6, mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          This showcase demonstrates the Material UI components and theme used in the ID Chips application.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} ID Chips
        </Typography>
      </Box>
    </Container>
  );
};

export default ThemeShowcase;



