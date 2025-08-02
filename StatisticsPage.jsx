import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

const StatisticsPage = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortenedUrls') || '[]');
    setUrls(data);
  }, []);

  return (
    <Container>
      <Typography variant="h4">Statistics</Typography>
      {urls.map((url, i) => (
        <Box key={i} sx={{ mt: 2, p: 2, border: '1px solid #ccc' }}>
          <Typography>Short URL: http://localhost:3000/{url.shortcode}</Typography>
          <Typography>Original: {url.original}</Typography>
          <Typography>Created: {new Date(url.createdAt).toLocaleString()}</Typography>
          <Typography>Expires: {new Date(url.expiry).toLocaleString()}</Typography>
          <Typography>Total Clicks: {url.clickCount}</Typography>
          <Typography>Clicks:</Typography>
          {url.clicks.map((c, idx) => (
            <Typography key={idx} sx={{ pl: 2 }}>
              - {new Date(c.timestamp).toLocaleString()} from {c.source} @ {c.location}
            </Typography>
          ))}
        </Box>
      ))}
    </Container>
  );
};

export default StatisticsPage;
