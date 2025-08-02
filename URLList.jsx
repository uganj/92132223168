import { Box, Typography, Link } from '@mui/material';

const URLList = ({ urls }) => {
  if (!urls.length) return null;
  console.log(urls)

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Shortened URLs:</Typography>
      {urls.map((u, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <Typography>Original: {u.original}</Typography>
          <Typography>
            Shortened: <Link href={`/${u.shortcode}`}>http://localhost:3000/{u.shortcode}</Link>
          </Typography>
          <Typography>Expires at: {u.expiry.toLocaleString()}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default URLList;
