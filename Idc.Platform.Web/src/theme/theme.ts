import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Declare module augmentation for custom palette colors
declare module '@mui/material/styles' {
    interface Palette {
        accent?: Palette['primary'];
    }
    interface PaletteOptions {
        accent?: PaletteOptions['primary'];
    }
}

// Declare module augmentation for custom button variant
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        accent: true;
    }
}

/**
 * Creates a theme based on the specified mode (light or dark)
 * Inspired by Apple's design aesthetic
 *
 * @param {PaletteMode} mode - The color mode ('light' or 'dark')
 * @returns {Theme} The configured Material-UI theme
 */
export const createAppTheme = (mode: PaletteMode): Theme => {
    // Create the base theme
    let theme = createTheme({
        palette: {
            mode,
            primary: {
                // Updated to a darker blue
                main: mode === 'light' ? '#1a56cc' : '#2a65dd',
                light: mode === 'light' ? '#4a78dd' : '#5a87ee',
                dark: mode === 'light' ? '#0c3b99' : '#1c4ab0',
                contrastText: '#fff',
            },
            secondary: {
                // Updated to a coral red for better contrast with blue
                main: mode === 'light' ? '#ff6b6b' : '#ff7e7e',
                light: mode === 'light' ? '#ff9e9e' : '#ffacac',
                dark: mode === 'light' ? '#c73e3e' : '#d44e4e',
                contrastText: '#fff',
            },
            accent: {
                // Keep accent color aligned with primary
                main: mode === 'light' ? '#1a56cc' : '#2a65dd',
                light: mode === 'light' ? '#4a78dd' : '#5a87ee',
                dark: mode === 'light' ? '#0c3b99' : '#1c4ab0',
                contrastText: '#fff',
            },
            background: {
                default: mode === 'light' ? '#f8faff' : '#1d1d1f', // Slightly blue-tinted in light mode
                paper: mode === 'light' ? '#ffffff' : '#2c2c2e',
            },
            text: {
                primary: mode === 'light' ? '#2b3445' : '#f5f5f7', // Darker blue-gray in light mode
                secondary: mode === 'light' ? '#637381' : '#a1a1a6', // Medium gray in light mode
            },
            error: {
                main: '#ff3b30', // Apple red
            },
            warning: {
                main: '#ff9500', // Apple orange
            },
            info: {
                main: '#007aff', // Apple blue
            },
            success: {
                main: '#34c759', // Apple green
            },
        },
        typography: {
            fontFamily: [
                '-apple-system', // Will use SF Pro on Apple devices
                'BlinkMacSystemFont',
                '"SF Pro Text"', // For Apple devices where -apple-system might not work
                '"SF Pro Icons"',
                '"Helvetica Neue"',
                'Helvetica',
                'Arial',
                'sans-serif',
            ].join(','),
            
            h1: {
                fontWeight: 600,
                fontSize: '3.5rem',
                letterSpacing: '-0.015em',
            },
            h2: {
                fontWeight: 600,
                fontSize: '2.75rem',
                letterSpacing: '-0.01em',
            },
            h3: {
                fontWeight: 600,
                fontSize: '2.25rem',
                letterSpacing: '-0.005em',
            },
            h4: {
                fontWeight: 600,
                fontSize: '1.75rem',
                letterSpacing: '-0.005em',
            },
            h5: {
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '0em',
            },
            h6: {
                fontWeight: 600,
                fontSize: '1.25rem',
                letterSpacing: '0em',
            },
            subtitle1: {
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0em',
            },
            subtitle2: {
                fontWeight: 500,
                fontSize: '0.875rem',
                letterSpacing: '0em',
            },
            body1: {
                fontWeight: 400,
                fontSize: '1rem',
                letterSpacing: '0em',
                lineHeight: 1.5,
            },
            body2: {
                fontWeight: 400,
                fontSize: '0.875rem',
                letterSpacing: '0em',
                lineHeight: 1.5,
            },
            button: {
                fontWeight: 500,
                fontSize: '0.875rem',
                letterSpacing: '0em',
                textTransform: 'none',
            },
        },
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'accent' },
                        style: {
                            color: '#fff',
                            backgroundColor: mode === 'light' ? '#1a56cc' : '#2a65dd',
                            '&:hover': {
                                backgroundColor: mode === 'light' ? '#0c3b99' : '#1c4ab0',
                            },
                        },
                    },
                ],
                styleOverrides: {
                    root: {
                        borderRadius: 30, // More rounded buttons
                        padding: '10px 20px', // Slightly larger padding
                        transition: 'all 0.2s ease-in-out',
                        textTransform: 'none',
                        fontWeight: 600, // Slightly bolder
                    },
// In the MuiButton styleOverrides, contained section:

contained: {
    boxShadow: mode === 'light'
        ? '0 4px 10px rgba(26, 86, 204, 0.24)'
        : '0 4px 10px rgba(42, 101, 221, 0.24)',  // Fixed the ternary operator
    '&:hover': {
        boxShadow: mode === 'light'
            ? '0 6px 15px rgba(26, 86, 204, 0.32)'
            : '0 6px 15px rgba(42, 101, 221, 0.32)',
        backgroundColor: mode === 'light' ? '#0c3b99' : '#1c4ab0',
    },
    background: mode === 'light'
        ? 'linear-gradient(135deg, #1a56cc 0%, #0c3b99 100%)'
        : 'linear-gradient(135deg, #2a65dd 0%, #1c4ab0 100%)',
},

                    outlined: {
                        borderWidth: 1,
                        '&:hover': {
                            borderWidth: 1,
                            backgroundColor: mode === 'light'
                                ? 'rgba(26, 86, 204, 0.05)'
                                : 'rgba(42, 101, 221, 0.05)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: mode === 'light'
                            ? '0px 8px 24px rgba(145, 158, 171, 0.16)'
                            : '0px 8px 24px rgba(0, 0, 0, 0.2)',
                        borderRadius: 16, // More rounded cards
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: mode === 'light'
                                ? '0px 12px 32px rgba(145, 158, 171, 0.2)'
                                : '0px 12px 32px rgba(0, 0, 0, 0.3)',
                        },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: 'none',
                        backgroundImage: 'none',
                        backgroundColor: mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(29, 29, 31, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderBottom: mode === 'light'
                            ? '1px solid rgba(0, 0, 0, 0.1)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        color: mode === 'light' ? '#2b3445' : '#f5f5f7',
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        borderRight: 'none',
                        backgroundImage: 'none',
                        backgroundColor: mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(44, 44, 46, 0.8)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: mode === 'light'
                            ? '2px 0px 8px rgba(0, 0, 0, 0.05)'
                            : '2px 0px 8px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 8,
                            '& fieldset': {
                                borderWidth: 1,
                                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                            },
                            '&.Mui-focused fieldset': {
                                borderWidth: 2,
                                borderColor: mode === 'light' ? '#1a56cc' : '#2a65dd',
                            },
                        },
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        fontWeight: 500,
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 500,
                        minWidth: 100,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        fontWeight: 600,
                        backgroundColor: mode === 'light' ? '#f8faff' : '#2c2c2e',
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        '&.Mui-selected': {
                            backgroundColor: mode === 'light'
                                ? 'rgba(26, 86, 204, 0.08)'
                                : 'rgba(42, 101, 221, 0.08)',
                            '&:hover': {
                                backgroundColor: mode === 'light'
                                    ? 'rgba(26, 86, 204, 0.12)'
                                    : 'rgba(42, 101, 221, 0.12)',
                            },
                        },
                        '&:hover': {
                            backgroundColor: mode === 'light'
                                ? 'rgba(0, 0, 0, 0.04)'
                                : 'rgba(255, 255, 255, 0.04)',
                        },
                    },
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        minWidth: 40,
                        color: 'inherit',
                    },
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        width: 42,
                        height: 26,
                        padding: 0,
                        margin: 8,
                    },
                    switchBase: {
                        padding: 1,
                        '&.Mui-checked': {
                            transform: 'translateX(16px)',
                            color: '#fff',
                            '& + .MuiSwitch-track': {
                                backgroundColor: mode === 'light' ? '#1a56cc' : '#2a65dd',
                                opacity: 1,
                                border: 'none',
                            },
                        },
                        '&.Mui-focusVisible .MuiSwitch-thumb': {
                            color: '#33cf4d',
                            border: '6px solid #fff',
                        },
                    },
                    thumb: {
                        width: 24,
                        height: 24,
                    },
                    track: {
                        borderRadius: 26 / 2,
                        backgroundColor: mode === 'light' ? '#E9E9EA' : '#39393D',
                        opacity: 1,
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        borderRadius: 16, // More rounded papers
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: mode === 'light'
                            ? 'rgba(0, 0, 0, 0.1)'
                            : 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
        },
    });

    // Make typography responsive
    theme = responsiveFontSizes(theme);

    return theme;
};
