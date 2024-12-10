"use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-700 text-gray-300 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
      </body>
    </html>
  );
}
