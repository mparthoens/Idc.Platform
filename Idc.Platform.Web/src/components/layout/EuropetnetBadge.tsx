import { Box } from '@mui/material';

/**
 * EuropetnetBadge component
 * 
 * Displays the Europetnet badge using the correct iframe URL
 * 
 * @returns {JSX.Element} A container with the Europetnet badge iframe
 */
const EuropetnetBadge = () => {
  // The badge ID and style parameters
  const badgeId = "IDC";
  const badgeStyle = "grey";
  
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 16px',
      }}
    >
      <div id="epnbadgeiframewrapper" style={{ height: 'auto' }}>
        <iframe 
          id="epnbadgeiframe"
          src={`https://www.europetnet.org/epn-badge/epn-badge.php?id=${badgeId}&style=${badgeStyle}`}
          style={{
            border: 'none',
            width: '205px',
            height: '35px',
            overflow: 'hidden' // Replaces scrolling="no"
          }}
          title="Europetnet Badge"
        />
      </div>
    </Box>
  );
};

export default EuropetnetBadge;
