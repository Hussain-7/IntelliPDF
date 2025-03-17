# Project Documentation

## 1. Overview
### Project Name
PDF Chat AI Application

### Purpose
This project creates an AI-powered application that allows users to upload PDF documents and have interactive conversations about the document's content. It leverages OpenAI's language models to enable users to ask questions about their PDFs and receive accurate responses based on the document's content. The application serves professionals and students who need to quickly extract information from large documents without reading them entirely.

### Key Features
- PDF document upload and management
- Interactive chat interface for document queries
- AI-powered document analysis and question answering
- User authentication and dashboard
- Fullscreen PDF viewing capability
- Mobile-responsive design

## 2. Architecture Overview
### Type of Application
Full-stack web application

### Data Flow
1. User uploads PDF documents through the UploadThing integration
2. Documents are processed and stored
3. When a user asks questions, the application:
   - Retrieves relevant document context using Pinecone vector database
   - Sends the context along with user's question to OpenAI
   - Returns AI-generated responses based on document content
   - Maintains conversation history for context-aware follow-up questions

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js (React)
- **CSS Framework:** Tailwind CSS
- **UI Components:** ShadcnUI (custom components)
- **Key Libraries:** React-PDF, React-Dropzone, React-Hook-Form

### Backend
- **Framework/Language:** Next.js API routes with TypeScript
- **Authentication:** Clerk (third-party auth service)
- **Core Libraries:** tRPC for type-safe API routes

### Database
- **Type:** Relational 
- **Technology:** PostgreSQL (via Prisma ORM)
- **Vector Storage:** Pinecone for semantic search capabilities

### AI Usage
- **Purpose:** Document analysis and conversational responses
- **Tools:** OpenAI language models for text generation and embeddings
- **Vector Database:** Pinecone for semantic similarity search

### Cloud Services
- **File Storage:** UploadThing for PDF file uploads and storage
- **Authentication:** Clerk for user management

## 4. API Documentation
### Overview
The application uses tRPC for type-safe API endpoints, with the main functionality centered around document management and chat interactions.

### Endpoint Details
Key endpoints include:
- PDF document upload and retrieval
- Message handling for the chat interface
- User authentication callbacks

## 5. Frontend Documentation
### Views and Navigation
- **Landing Page:** Introduction to the application
- **Authentication:** Login/signup flow
- **Dashboard:** List of uploaded PDF documents
- **Document View:** PDF display with chat interface
- **Account Management:** User profile and settings

### Components
- `PdfRenderer`: Handles PDF document display
- `ChatWrapper`: Contains the chat interface components
- `UploadButton`: Manages the file upload process
- `Dashboard`: Displays user's document library
- Various UI components (buttons, inputs, dialogs)

## 6. Backend Documentation
### Core Logic
- PDF processing and storage
- Vector embeddings generation for semantic search
- Chat message processing and AI response generation

### Services and Layers
- tRPC router for handling API requests
- Prisma client for database operations
- OpenAI integration for AI capabilities
- Pinecone for vector storage and retrieval

### Database Operations
The Prisma schema defines:
- User data (linked to Clerk)
- Document storage
- Message history

## 8. Testing
The project appears to use client-side validation for form inputs, but comprehensive testing frameworks are not explicitly defined in the provided structure.

## 9. Development Guidelines
### Coding Standards
- ESLint and Prettier for code formatting and style enforcement
- TypeScript for type safety

## 10. Onboarding Checklist
### Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Set up environment variables (follow `.env.example`)
4. Set up database with Prisma: `npx prisma migrate dev`
5. Run the development server: `npm run dev`

### Environment Variables
Required environment variables include:
- OpenAI API keys
- Database connection strings
- Uploadthing API keys
- Clerk authentication keys
- Pinecone API configuration

For more details checkout the following files: [.env.example, README.md, src/lib/openai.ts, src/lib/pinecone.ts, prisma/schema.prisma, src/app/api/uploadthing/core.ts]