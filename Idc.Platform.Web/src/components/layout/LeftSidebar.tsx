import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  Theme,
  Box,
  useTheme,
  alpha,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SecurityIcon from '@mui/icons-material/Security';
import EuropetnetBadge from './EuropetnetBadge';

/**
 * Props interface for the LeftSidebar component
 */
interface LeftSidebarProps {
  /** Boolean indicating if the mobile sidebar is open */
  mobileOpen: boolean;
  /** Boolean indicating if the desktop sidebar is open */
  desktopOpen: boolean;
  /** Callback function to close the mobile sidebar */
  onMobileClose: () => void;
}

/**
 * LeftSidebar component that provides navigation links in a collapsible sidebar.
 * It has different behavior for mobile and desktop viewports.
 *
 * @param {LeftSidebarProps} props - Component props
 * @returns {JSX.Element} Rendered LeftSidebar component
 */
const LeftSidebar = ({
  mobileOpen,
  desktopOpen,
  onMobileClose,
}: LeftSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const theme = useTheme();
  
  // Determine if the current viewport is desktop size
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  
  // Width of the sidebar when open
  const drawerWidth = 240;

  // Navigation menu items with icons and translation keys
  const menuItems = [
    { text: t('navigation.home'), icon: <HomeIcon />, path: '/' },
    {
      text: t('navigation.contact'),
      icon: <ContactMailIcon />,
      path: '/contact',
    },
    { text: t('navigation.gdpr'), icon: <SecurityIcon />, path: '/gdpr' },
  ];

  /**
   * Handles navigation to a specific path and closes the mobile drawer if on mobile
   *
   * @param {string} path - The route path to navigate to
   */
  const handleNavigation = (path: string) => {
    navigate(path);
    if (!isDesktop) {
      onMobileClose();
    }
  };

  // Shared drawer content for both mobile and desktop versions
  const drawer = (
    <>
      {/* Toolbar spacer to push content below the app bar */}
      <Toolbar />
      
      {/* Add space above the first menu item - adjust the height value as needed */}
      <Box sx={{ height: 16 }} />
      
      {/* Navigation menu list */}
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => {
          const isSelected = location.pathname === item.path;
          
          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ mb: 0.5 }}
            >
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={isSelected}
                sx={{
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    },
                  },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.action.hover, 0.7),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isSelected ? theme.palette.primary.main : theme.palette.text.secondary,
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 500 : 400,
                    color: isSelected ? theme.palette.primary.main : theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        
        {/* Add some space between the last menu item and the badge */}
        <Box sx={{ height: 16 }} />
        
        {/* Europetnet Badge right after the menu items */}
        <ListItem disablePadding>
          <EuropetnetBadge />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {/* Mobile drawer - temporary, shown as overlay when open */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: alpha(theme.palette.background.default, 0.9),
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Desktop drawer - persistent, pushes content when open */}
      <Box
        component='nav'
        sx={{
          width: { md: desktopOpen ? drawerWidth : 0 },
          flexShrink: { md: 0 },
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: desktopOpen ? drawerWidth : 0,
              borderRight: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              transition: (theme) =>
                theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              overflowX: 'hidden',
              backgroundColor: alpha(theme.palette.background.default, 0.8),
              backdropFilter: 'blur(10px)',
            },
          }}
          open={desktopOpen}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default LeftSidebar;
