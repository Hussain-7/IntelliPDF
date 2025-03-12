# Project Documentation

## 1. Overview
### Project Name
PDF Chat Application

### Purpose
This is a full-stack application that allows users to upload PDF files and interact with them via a chat interface. Specifically designed for W2 tax form processing and tax-related queries, the application uses AI to extract and process information from the PDFs, enabling users to ask questions and receive relevant answers based on the content of their documents. It provides an intuitive dashboard for managing PDF files and features real-time chat capabilities, making it easier for users to analyze and extract tax insights from their documents without having to read them thoroughly.

### Key Features
- PDF file upload and management
- AI-powered chat interface for interacting with PDF content
- Tax-specific document processing and question answering
- User authentication and authorization
- Dashboard for viewing and accessing uploaded documents
- Real-time messaging with AI about document contents
- PDF rendering and viewing capabilities
- Responsive design for both desktop and mobile use

## 2. Architecture Overview
### Type of Application 
Full-stack application

### Data Flow
1. Users authenticate via Kinde Auth service
2. Users upload PDF files through the UploadThing service
3. PDF content is processed using Langchain for extracting text
4. Content is converted to vectors using OpenAI embeddings
5. Vectors are stored in Pinecone (with file ID as namespace) for efficient retrieval
6. File status is updated to SUCCESS or FAILED after processing
7. Users can select a PDF from their dashboard to chat about
8. User messages are validated and processed through the tRPC API
9. OpenAI is used to generate responses based on the PDF content
10. Messages are stored and retrieved via Prisma/database

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js (v14.1.0), React
- **CSS Framework:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui
- **Key Libraries:** react-pdf, react-dropzone, react-textarea-autosize
- **State Management:** React Query, tRPC for API communication

### Backend
- **Framework/Language:** Next.js API routes, tRPC
- **Authentication:** Kinde Auth
- **Core Libraries:** Zod (validation), Langchain (PDF processing)

### Database
- **Type:** Relational
- **Technology:** PostgreSQL (via Supabase)
- **ORM:** Prisma

### AI Usage
- **Purpose:** Document analysis, tax form processing, and question answering
- **Tools:** OpenAI, Pinecone (vector database), Langchain

### Cloud Services
- **File Storage:** UploadThing
- **Vector Database:** Pinecone
- **Database Hosting:** Supabase

## 4. API Documentation
### Overview
The application uses tRPC for type-safe API endpoints and standard Next.js API routes.

### Endpoint Details
- `/api/auth/[kindeAuth]`: Handles authentication routes
- `/api/message`: Processes chat messages
- `/api/trpc/[trpc]`: tRPC API endpoint
- `/api/uploadthing`: Handles file uploads

## 5. Frontend Documentation
### Views and Navigation
- **Landing Page**: Introduction to the service with marketing content and a three-step process explanation
- **Auth Callback**: Handles post-authentication flow
- **Dashboard**: Main view showing user's uploaded PDFs
- **File View**: PDF viewer with chat interface for a specific file

### Components
- **Chat Components**: `ChatWrapper.tsx`, `ChatInput.tsx`, `Messages.tsx`, etc.
- **PDF Rendering**: `PdfRenderer.tsx`, `PdfFullscreen.tsx`
- **Navigation**: `Navbar.tsx`, `MobileNav.tsx`
- **UI Elements**: Custom UI components in the `ui` directory

## 6. Backend Documentation
### Core Logic
- **Authentication**: Managed through Kinde Auth
- **File Processing**: 
  1. User uploads PDF via UploadThing
  2. System creates file record with PROCESSING status
  3. PDF content is extracted using Langchain
  4. Content is converted to vectors using OpenAI embeddings
  5. Vectors are stored in Pinecone with the file ID as namespace
  6. File status is updated to SUCCESS or FAILED
- **Document Understanding**: Using OpenAI and Pinecone for processing PDF content
- **Message Handling**: Validation and processing of user messages

### Services and Layers
- **API Routes**: Standard Next.js API routes
- **tRPC Routers**: Type-safe API endpoints
- **Context Providers**: React context for managing application state

### Database Operations
- Prisma ORM used for database interactions
- Schema includes User, File, and Message models
- File model includes status tracking (PENDING, PROCESSING, FAILED, SUCCESS)
- Appropriate relations between models with indexes defined

## 7. Testing
No specific testing frameworks or strategies are explicitly defined in the provided project structure.

## 8. Development Guidelines
### Coding Standards
- ESLint and Prettier are configured for code formatting and linting
- TypeScript is used throughout the project for type safety

## 9. Onboarding Checklist
### Setup Instructions
1. Clone the repository
2. Install dependencies with `yarn` or `npm install`
3. Copy `.env.example` to `.env` and fill in required environment variables
4. Set up Kinde Auth, OpenAI, Pinecone, and UploadThing accounts
5. Run database migrations using Prisma
6. Start the development server with `yarn dev` or `npm run dev`

### Environment Variables
The application requires the following environment variables:
- Authentication credentials for Kinde Auth
- Database connection string for Supabase
- API keys for OpenAI
- Pinecone configuration
- UploadThing API keys
- Backend server URL

## 10. Scripts/Utilities
### Commands
- Development: `yarn run dev`
- Build: Command defined in package.json
- Start: Command defined in package.json
- Database: Various database commands defined in package.json