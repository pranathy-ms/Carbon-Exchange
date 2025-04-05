import env from '../config/env';

export const getCarbonCompanies = async () => {
  const response = await fetch(`${env.API_BASE_URL}/carbon-companies`);
  return response.json();
};
