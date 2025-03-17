# Technical Documentation Summary

## page.tsx
A Next.js page component that displays a PDF file with a chat interface. It:
- Verifies user authentication via Kinde auth
- Redirects unauthenticated users to auth-callback
- Fetches the requested file from the database
- Renders a split-screen layout with PDF viewer and chat panel
- Returns 404 if file not found

## ChatWrapper.tsx
A client-side component that manages the chat interface:
- Uses tRPC to query file upload status
- Displays different statuses based on file processing state
- Shows appropriate loading/error messages
- Renders Messages and ChatInput components within ChatContextProvider
- Handles various file states: loading, processing, failed, and ready

## pinecone.ts
A simple configuration file that initializes the Pinecone vector database client with an API key from environment variables.

## schema.prisma
Prisma database schema definition:
- PostgreSQL database configuration
- Three main models:
  - User: stores user ID and email
  - File: tracks uploaded files with status, URL, and metadata
  - Message: stores chat messages with text content and relationships
- Defines relationships between models (one-to-many)
- Includes enums for file upload status (PENDING, PROCESSING, FAILED, SUCCESS)
- Sets up proper indexing for foreign key relationships

The project appears to be a PDF viewing application with AI chat capabilities, using NextJS, Prisma ORM, and Pinecone for vector storage.