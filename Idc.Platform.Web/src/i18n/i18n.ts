import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enContact from './locales/en/contact.json';
import enGdpr from './locales/en/gdpr.json';

/**
 * Translation resources configuration
 * Organizes translations by language and namespace
 * 
 * Structure:
 * - Top level: language code (en, fr, nl, de)
 * - Second level: namespace (common, home, contact, gdpr)
 * - Content: key-value pairs of translations
 */
const resources = {
	en: {
		common: enCommon,   // Common translations used across the app
		home: enHome,       // Home page specific translations
		contact: enContact, // Contact page specific translations
		gdpr: enGdpr,       // GDPR page specific translations
	},
};

/**
 * i18next configuration
 * Sets up internationalization with language detection and React integration
 */
i18n
	// Detect user language from browser
	.use(LanguageDetector)
	// Integrate with React
	.use(initReactI18next)
	// Initialize i18next with configuration
	.init({
		// Translation resources defined above
		resources,
		// Default language
		lng: 'en',
		// Fallback language if translation is missing
		fallbackLng: 'en',
		// Default namespace for translations
		defaultNS: 'common',
		// Interpolation configuration
		interpolation: {
			escapeValue: false, // React already escapes values
		},
	});

export default i18n;
