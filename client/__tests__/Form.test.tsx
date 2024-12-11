import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CreatePost from '../app/create/page';
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
  }),
}));

test('should render without crashing', async () => {
  render(
      <MockedProvider addTypename={false}>
        <CreatePost />
      </MockedProvider>
  );

  expect(screen.getByText('Create a New Blog Post')).toBeInTheDocument();
});

test('should show validation errors when form is submitted with missing fields', async () => {
  render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CreatePost />
      </MockedProvider>
  );

  fireEvent.click(screen.getByText(/submit/i));

  expect(await screen.findByText(/Title is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Content is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Author is required/i)).toBeInTheDocument();
});
