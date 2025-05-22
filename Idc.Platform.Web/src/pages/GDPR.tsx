import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  useTheme,
  alpha,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * GDPR page component
 * Provides information about data protection and privacy policies
 * in compliance with General Data Protection Regulation (GDPR)
 *
 * @returns {JSX.Element} The rendered GDPR page
 */
const GDPR = () => {
  // Initialize translation hook
  const { t } = useTranslation(['gdpr', 'common']);
  const theme = useTheme();

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
          {t('gdpr:title')}
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
          {t('gdpr:subtitle')}
        </Typography>
      </Box>

      {/* Main content */}
      <Card
        elevation={0}
        sx={{
          mb: 4,
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
            variant='body1'
            paragraph
            sx={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            {t('gdpr:content')}
          </Typography>

          {/* GDPR sections */}
          <Grid
            container
            spacing={4}
            sx={{ mt: 2 }}
          >
            {/* Data Collection Section */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant='h5'
                  component='h2'
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 2,
                  }}
                >
                  {t('gdpr:sections.dataCollection.title')}
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('gdpr:sections.dataCollection.content')}
                </Typography>
              </Box>
            </Grid>

            {/* Data Use Section */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant='h5'
                  component='h2'
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 2,
                  }}
                >
                  {t('gdpr:sections.dataUse.title')}
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('gdpr:sections.dataUse.content')}
                </Typography>
              </Box>
            </Grid>

            {/* Divider for visual separation */}
            <Grid
              item
              xs={12}
            >
              <Divider 
                sx={{ 
                  my: 2,
                  borderColor: alpha(theme.palette.divider, 0.1),
                  opacity: 0.8,
                }} 
              />
            </Grid>

            {/* Data Protection Section */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant='h5'
                  component='h2'
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 2,
                  }}
                >
                  {t('gdpr:sections.dataProtection.title')}
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('gdpr:sections.dataProtection.content')}
                </Typography>
              </Box>
            </Grid>

            {/* Your Rights Section */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant='h5'
                  component='h2'
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 2,
                  }}
                >
                  {t('gdpr:sections.yourRights.title')}
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t('gdpr:sections.yourRights.content')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Contact information for data protection inquiries */}
      <Card
        elevation={0}
        sx={{
          mb: 6,
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
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: '1.5rem',
              mb: 2,
            }}
          >
            {t('gdpr:contact.title')}
          </Typography>
          <Typography 
            variant='body1'
            sx={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            {t('gdpr:contact.content')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GDPR;
