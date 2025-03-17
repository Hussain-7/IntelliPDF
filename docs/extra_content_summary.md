# Technical Documentation Summary

## ChatContext.tsx
- Implements a React Context system for chat functionality with real-time messaging
- Manages message state, loading state, and handles message sending
- Uses tRPC utilities for data invalidation and optimistic updates
- Implements streaming response handling for AI messages
- Provides mutation functions for sending messages with proper error handling
- Exports a `useChat` hook for consuming the context

## page.tsx
- Server component for displaying PDF files with chat functionality
- Validates user authentication and redirects unauthenticated users
- Retrieves file information from the database based on URL parameters
- Renders a two-column layout with PDF renderer and chat interface
- Handles access control by checking if the file belongs to the current user

## ChatInput.tsx
- UI component for the chat input interface
- Features a textarea with send button for message submission
- Implements keyboard shortcuts (Enter to send)
- Consumes the ChatContext using the useChat hook
- Manages focus state and disabled states

## sendMessageValidator.ts
- Defines a Zod schema for message validation
- Ensures messages contain a fileId and message content string

## middleware.ts
- Implements authentication middleware using Kinde Auth
- Protects routes like `/dashboard` and `/auth-callback`
- Ensures users are authenticated before accessing protected routes