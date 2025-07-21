export const baseUrl =
  process.env.VERCEL_ENV === "production"
    ? `https://whiteee.space`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
