import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { isValidURL, isValidShortcode, isValidMinutes } from '../utils/validators';

const URLForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState(Array(5).fill({ url: '', validity: '', shortcode: '' }));
  const [error, setError] = useState('');

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const validated = [];

    for (const item of inputs) {
      if (!item.url) continue;
      if (!isValidURL(item.url)) return setError('Invalid URL detected.');
      if (item.validity && !isValidMinutes(Number(item.validity))) return setError('Invalid validity.');
      if (item.shortcode && !isValidShortcode(item.shortcode)) return setError('Invalid shortcode.');
      validated.push({ ...item, validity: Number(item.validity) });
    }

    if (validated.length === 0) return setError('No valid URLs to shorten.');
    setError('');
    onSubmit(validated);
  };

  return (
    <Box>
      {inputs.map((input, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <TextField
            label="Original URL"
            fullWidth
            value={input.url}
            onChange={(e) => handleChange(i, 'url', e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Validity (minutes)"
            type="number"
            value={input.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            label="Custom Shortcode"
            value={input.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
          />
        </Box>
      ))}
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleSubmit}>Shorten URLs</Button>
    </Box>
  );
};

export default URLForm;