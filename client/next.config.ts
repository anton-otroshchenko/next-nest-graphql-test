import type { NextConfig } from "next";

require("dotenv").config();

const nextConfig: NextConfig = {
  env: {
    HOST_URL: process.env.HOST_URL,
  }
};

export default nextConfig;
