export default () => ({
  app: {
    name: process.env.APP_NAME || 'RevenueFlow',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 3000,
    apiPrefix: 'api',
  },
});
