const env = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  PAYMENT_GATEWAY_KEY: process.env.REACT_APP_PAYMENT_GATEWAY_KEY || "your-payment-key",
};

export default env;
