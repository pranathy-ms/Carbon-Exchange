import env from '../config/env';

export const createInvestment = async (investmentData) => {
  const response = await fetch(`${env.API_BASE_URL}/investments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(investmentData)
  });
  return response.json();
};
