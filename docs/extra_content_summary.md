# Technical Documentation Summary

## Environment Configuration (.env.example)
- Requires configuration for authentication (Kinde), database (Supabase), file uploads (Uploadthing), vector database (Pinecone), and OpenAI API key
- Includes a backend server URL configuration option

## Project Overview (README.md)
- JavaScript-based application using Yarn or NPM
- Primary dependencies: Pinecone (vector database), Prisma (ORM), OpenAI, Langchain (PDF processing), Uploadthing (file uploads), Shadcn-ui, Kindeauth
- Designed specifically for W2 tax form processing and tax-related queries
- Simple startup: `yarn run dev`

## Database Schema (schema.prisma)
- PostgreSQL database with Prisma ORM
- Models: User, File, and Message
- File upload statuses: PENDING, PROCESSING, FAILED, SUCCESS
- Appropriate relations between models with indexes

## API Integrations
- OpenAI integration configured via API key
- Pinecone vector database integration via API key
- Authentication middleware with Kinde

## Core Functionality (core.ts)
- File upload handling using Uploadthing
- PDF processing workflow:
  1. User uploads PDF
  2. System creates file record with PROCESSING status
  3. PDF content is extracted using Langchain
  4. Content is converted to vectors using OpenAI embeddings
  5. Vectors are stored in Pinecone with the file ID as namespace
  6. File status is updated to SUCCESS or FAILED

## Frontend (page.tsx)
- Landing page with marketing content
- Three-step process explanation: signup, upload PDF, ask questions
- Includes preview images and marketing copy

## Project Setup
- NextJS-based application (v14.1.0)
- React Query and tRPC for API communication
- Tailwind CSS for styling
- Includes build, start, and database commands in package.json