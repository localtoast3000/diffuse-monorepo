import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import BasicHttpRequests from '../base';

export default (() => {
  return {
    ...BasicHttpRequests('https://stablediffusionapi.com/api/v3'),
  };
})();
