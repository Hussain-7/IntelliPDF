# Project Documentation

## 1. Overview
### Project Name
PDF AI Chat Assistant

### Purpose
This project is a Next.js application that allows users to upload PDF documents and interact with them through an AI-powered chat interface. The system processes uploaded PDFs, extracts their content, and uses AI models to allow users to ask questions about the documents. It serves professionals and researchers who need to quickly extract information from lengthy documents without reading them entirely. The application combines document management with natural language processing to create an intuitive way to converse with document content, with a particular focus on processing W2 tax forms.

### Key Features
- User authentication via Kinde Auth
- PDF document upload and management
- Interactive chat interface with PDF documents
- AI-powered question answering using OpenAI
- Vector database storage for document content using Pinecone
- Responsive design with mobile support
- Real-time messaging with streaming responses
- Tax form (W2) processing capabilities

## 2. Architecture Overview
### Type of Application
Full-stack web application

### Data Flow
1. Users authenticate through Kinde Auth
2. Users upload PDF documents via the UploadThing integration
3. PDF content is processed and stored in Pinecone vector database
4. Users can select documents to chat with
5. User queries are processed by tRPC endpoints
6. OpenAI processes the queries against relevant document content
7. Responses are streamed back to the user interface

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js 14.1.0 with React 18
- **CSS Framework:** Tailwind CSS
- **Key Libraries:** React-PDF, tRPC client, shadcn/ui components

### Backend
- **Framework/Language:** Next.js API routes, tRPC
- **Authentication:** Kinde Auth
- **Core Libraries:** OpenAI SDK, Pinecone SDK, UploadThing, LangChain

### Database
- **Type:** PostgreSQL via Prisma ORM (Supabase)
- **Vector Database:** Pinecone for document embeddings

### AI Usage
- **Purpose:** PDF content analysis and question answering
- **Tools:** OpenAI API for embeddings and completions
- **Framework:** LangChain for PDF processing

### Cloud Services
- **File Storage:** UploadThing for PDF storage
- **Vector Database:** Pinecone for document embeddings
- **Database Hosting:** Supabase PostgreSQL

## 4. API Documentation
### Overview
- Authentication handled through Kinde Auth
- API routes for message processing and file uploads

### Endpoint Details
- `/api/message`: Handles chat messages for PDF documents
- `/api/uploadthing`: Manages file uploads
- `/api/auth/[kindeAuth]`: Authentication endpoints
- `/api/trpc/[trpc]`: tRPC API endpoint

## 5. Frontend Documentation
### Views and Navigation
- Home page (landing page)
- Authentication callback page
- Dashboard with uploaded documents
- Document chat interface

### State Management
- React context for chat state management
- tRPC queries and mutations for server state

### Styling
- Tailwind CSS for styling
- shadcn/ui component library
- Responsive design with mobile navigation

## 6. Backend Documentation
### Core Logic
- PDF processing and text extraction
- Vector embeddings creation and storage
- AI-powered question answering
- Document status tracking (PENDING/PROCESSING/FAILED/SUCCESS)

### Services and Layers
- tRPC routers for type-safe API endpoints
- Next.js API routes for authentication and file handling
- Chat processing middleware for handling conversations

### Database Operations
- Prisma ORM for database interactions
- Document and message storage in PostgreSQL
- Vector embeddings stored in Pinecone

### Database Schema
- **User**: Stores user information with relationship to files and messages
- **File**: Tracks uploaded documents with status tracking
- **Message**: Stores conversation history between users and the AI

## 7. Testing
No explicit testing frameworks were identified in the project structure.

## 8. Development Guidelines
### Coding Standards
- ESLint and Prettier for code formatting
- TypeScript for type safety

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build application
- `npm run push` - Update database schema

## 9. Onboarding Checklist
### Setup Instructions
1. Clone the repository
2. Install dependencies with yarn or npm
3. Set up environment variables (see below)
4. Set up database with Prisma
5. Run development server with `npm run dev`

### Access Requirements
- Kinde Auth credentials
- OpenAI API key
- Pinecone API key and environment
- UploadThing API credentials
- Supabase PostgreSQL connection strings

## 10. Project Assumptions
- The system is primarily designed to handle W2 tax forms
- AI models are trained to answer tax-related queries
- Custom training would be needed for other document types/queries

## Missing Context
For a more complete analysis, these files would be helpful:
- package.json (for complete dependencies)
- .env.example (for required environment variables)
- prisma/schema.prisma (for detailed database schema)
- src/trpc/index.ts (for API endpoint structure)
- README.md (for project overview)