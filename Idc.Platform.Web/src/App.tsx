import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import GDPR from './pages/GDPR';
import ThemeShowcase from './pages/ThemeShowcase';
import { ThemeProvider } from './contexts/ThemeContext';

// Import i18n configuration to enable translations
import './i18n/i18n';

/**
 * Main application component
 * Sets up routing, theming, and the overall application structure
 *
 * @returns {JSX.Element} The rendered application
 */
function App() {
  return (
    // Apply our custom ThemeProvider that supports theme toggling
    <ThemeProvider>
      {/* CssBaseline normalizes browser styles */}
      <CssBaseline />
      {/* Router setup for navigation */}
      <Router>
        <Routes>
          {/* Main layout with nested routes */}
          <Route
            path='/'
            element={<MainLayout />}>
            {/* Home page (default route) */}
            <Route
              index
              element={<Home />}
            />
            {/* Contact page */}
            <Route
              path='contact'
              element={<Contact />}
            />
            {/* GDPR information page */}
            <Route
              path='gdpr'
              element={<GDPR />}
            />
            {/* Theme showcase page */}
                        <Route
              path='theme-showcase'
              element={<ThemeShowcase />}
            />

          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
