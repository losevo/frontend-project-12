import axios from 'axios';
import routes from '../hooks/routes';
import getAuthHeader from './getAuthHeader';

export default async () => {
  const header = getAuthHeader();
  const response = await axios.get(routes.dataPath(), { headers: header })
    .then(({ data }) => data);
  return response;
};
