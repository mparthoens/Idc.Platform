import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme,
  alpha,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/**
 * Contact page component
 * Provides a contact form and displays company contact information
 *
 * @returns {JSX.Element} The rendered Contact page
 */
const Contact = () => {
  // Initialize translation hook
  const { t } = useTranslation(['contact', 'common']);
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Success/error message state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Handles form input changes
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Simulate successful submission
    setIsSuccess(true);
    setOpenSnackbar(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  /**
   * Closes the snackbar notification
   */
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth='lg'>
      {/* Page header */}
      <Box 
        sx={{ 
          my: { xs: 6, md: 8 }, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em',
            mb: 3,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #2997ff 0%, #5ac8fa 100%)' 
              : 'linear-gradient(90deg, #0071e3 0%, #42a5f5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('contact:title')}
        </Typography>
        <Typography
          variant='h5'
          color='text.secondary'
          paragraph
          sx={{
            fontWeight: 500,
            maxWidth: '800px',
            mb: 3,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            lineHeight: 1.4,
          }}
        >
          {t('contact:subtitle')}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
      >
        {/* Contact form */}
        <Grid
          item
          xs={12}
          md={7}
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(10px)',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 24px rgba(0,0,0,0.2)'
                  : '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                {t('contact:form.title', 'Send us a message')}
              </Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='name'
                  label={t('contact:form.name')}
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  variant='outlined'
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.background.default, 0.5),
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label={t('contact:form.email')}
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  variant='outlined'
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.background.default, 0.5),
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='subject'
                  label={t('contact:form.subject')}
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  variant='outlined'
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.background.default, 0.5),
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='message'
                  label={t('contact:form.message')}
                  name='message'
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant='outlined'
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.background.default, 0.5),
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ 
                    mt: 3, 
                    mb: 2,
                    borderRadius: 8,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: 'none',
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? '#1e87e8' 
                        : '#0062c3',
                    },
                  }}
                >
                  {t('contact:form.submit')}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact information */}
        <Grid
          item
          xs={12}
          md={5}
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(10px)',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 24px rgba(0,0,0,0.2)'
                  : '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                {t('contact:contact.title')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                {/* Address */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    mb: 3,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography 
                      variant='subtitle1'
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Address
                    </Typography>
                    <Typography variant='body2'>
                      {t('contact:contact.address')}
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    mb: 3,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography 
                      variant='subtitle1'
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Phone
                    </Typography>
                    <Typography variant='body2'>
                      {t('contact:contact.phone')}
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    mb: 3,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography 
                      variant='subtitle1'
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Email
                    </Typography>
                    <Typography variant='body2'>
                      {t('contact:contact.email')}
                    </Typography>
                  </Box>
                </Box>

                {/* Business hours */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    mb: 2,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    <AccessTimeIcon />
                  </Box>
                  <Box>
                    <Typography 
                      variant='subtitle1'
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Business Hours
                    </Typography>
                    <Typography variant='body2'>
                      {t('contact:contact.hours')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Success/error notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
                <Alert
          onClose={handleCloseSnackbar}
          severity={isSuccess ? 'success' : 'error'}
          sx={{ 
            width: '100%',
            borderRadius: 2,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 12px rgba(0,0,0,0.3)'
              : '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {isSuccess ? t('contact:success') : t('contact:error')}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;

