import env from '../config/env';

export const processPayment = async (paymentDetails) => {
  const response = await fetch(`${env.API_BASE_URL}/payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentDetails)
  });
  return response.json();
};
