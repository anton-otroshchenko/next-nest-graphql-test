import type { NextConfig } from "next";

require("dotenv").config();

const nextConfig: NextConfig = {
  env: {
    HOST_URL: process.env.HOST_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
  }
};

export default nextConfig;
