"use client"

import localFont from "next/font/local";
import "./globals.css";

import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client'
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-700 text-gray-300 font-roboto antialiased`}
      >
      <ApolloProvider client={client}>
        <Toaster position="top-right" />
        {children}
      </ApolloProvider>
      </body>
    </html>
  );
}
