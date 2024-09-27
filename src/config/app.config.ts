export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
  port: process.env.PORT || 3001,
});
