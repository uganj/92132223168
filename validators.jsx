export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidShortcode = (code) => {
  return /^[a-zA-Z0-9]{4,12}$/.test(code); // Adjust length as needed
};

export const isValidMinutes = (val) => {
  return Number.isInteger(val) && val > 0;
};