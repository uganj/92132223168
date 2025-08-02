import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem('shortenedUrls') || '[]');
    const matched = data.find((u) => u.shortcode === shortcode);
    if (matched && new Date(matched.expiry) > new Date()) {
      matched.clickCount += 1;
      matched.clicks.push({ timestamp: new Date(), source: 'browser', location: 'Unknown' });
      localStorage.setItem('shortenedUrls', JSON.stringify(data));
      window.location.href = matched.original;
    } else {
      navigate('/');
    }
  }, [shortcode, navigate]);

  return null;
};

export default RedirectPage;
