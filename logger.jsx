const logs = [];

export const logEvent = (event, payload = {}) => {
  const timestamp = new Date().toISOString();
  const log = { timestamp, event, ...payload };
  logs.push(log);
    localStorage.setItem('appLogs', JSON.stringify(logs));
};

export const getLogs = () => logs;