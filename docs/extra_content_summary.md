# AI-Based PDF Dropbox Technical Documentation Summary

## Project Overview
This project is a Next.js application that provides AI-powered PDF document processing capabilities with authentication, file uploads, and natural language processing.

## Core Technology Stack
- **Framework**: Next.js 14.1.0 with React 18
- **Authentication**: Kinde Auth
- **Database**: PostgreSQL via Prisma ORM
- **AI/ML**: OpenAI, LangChain for PDF processing
- **Storage**: UploadThing for file uploads
- **Vector Database**: Pinecone for document embeddings
- **UI**: Tailwind CSS, shadcn-ui components

## Key Features
- User authentication
- PDF file upload and processing
- AI-powered document analysis
- Chat interface for document queries

## Database Schema
- **User**: Stores user information with relationship to files and messages
- **File**: Tracks uploaded documents with status tracking (PENDING/PROCESSING/FAILED/SUCCESS)
- **Message**: Stores conversation history between users and the AI

## Configuration
The project requires several environment variables to be configured:
- Kinde authentication credentials
- Supabase PostgreSQL connection strings
- UploadThing API keys
- Pinecone API keys
- OpenAI API key

## Project Assumptions
- The system is primarily designed to handle W2 tax forms
- AI models are trained to answer tax-related queries
- Custom training would be needed for other document types/queries

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build application
- `npm run push` - Update database schema

The application integrates multiple AI technologies to provide an intelligent document processing and query system with secure authentication and storage capabilities.