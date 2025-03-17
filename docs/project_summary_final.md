# Project Documentation for IntelliPDF

## 1. Overview
### Project Name
PDF Chat Application

### Purpose
This is a full-stack application that allows users to upload PDF documents and chat with them using AI. The system processes the PDF content, uses AI to understand it, and enables users to ask questions about the document's content through a chat interface. The application provides a dashboard to manage uploaded documents and a dedicated chat interface for each document. It serves professionals, students, and researchers who need to quickly extract information from lengthy PDFs without reading the entire content.

### Key Features
- PDF document upload and management
- AI-powered chat interface for querying PDF content
- User authentication and session management with Kinde Auth
- Document viewer with navigation capabilities
- Dashboard for managing uploaded documents
- Real-time chat with AI about document content
- Fullscreen PDF viewing mode
- File deletion capabilities

## 2. Architecture Overview
### Type of Application
Full-stack application

### Data Flow
The application follows this data flow:
1. Users authenticate through Kinde authentication
2. Users upload PDF documents through the upload interface
3. Backend processes PDFs and stores them using UploadThing
4. Documents are vectorized and indexed in Pinecone for AI retrieval
5. Users select documents from their dashboard to view and chat about
6. User questions are processed by the OpenAI API with context from the indexed document
7. AI-generated responses are returned to the user in the chat interface

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js, React
- **CSS Framework:** Tailwind CSS
- **UI Components:** Shadcn UI components
- **Key Libraries:** react-pdf, react-textarea-autosize, react-dropzone

### Backend
- **Framework/Language:** Next.js (API routes), TypeScript
- **Authentication:** Kinde Auth
- **Core Libraries:** tRPC, Prisma, Zod, Langchain

### Database
- **Type:** Relational
- **Technology:** PostgreSQL (via Prisma ORM)

### AI Usage
- **Purpose:** PDF content understanding and question answering
- **Tools:** OpenAI API, Pinecone (vector database), Langchain

### Cloud Services
- **Storage:** UploadThing (for file uploads)
- **Database:** Hosted PostgreSQL database
- **Vector Database:** Pinecone

## 4. API Documentation
### Overview
The application uses tRPC for type-safe API endpoints with client-server communication.

### Endpoint Details
- **Authentication:** Handles authentication callbacks
- **Files Management:** 
  - Retrieves user's files
  - Deletes files
  - Gets single file by ID
- **Messages:** 
  - Retrieves messages for a specific file
  - Processes user messages and generates AI responses
- **File Upload:** 
  - Handles document uploads via UploadThing
  - Tracks upload status

## 5. Frontend Documentation
### Views and Navigation
- **Home Page:** Introduction and features overview
- **Dashboard:** List of user's uploaded documents
- **Document View:** PDF viewer with chat interface
- **Auth Callback:** Authentication handling page

### Components
- **Navbar:** Main navigation with authentication status
- **Dashboard:** Document management interface
- **PdfRenderer:** PDF viewing component with controls
- **ChatWrapper:** Container for the chat interface
- **Messages:** Display of conversation history
- **ChatInput:** User input for questions about the document with textarea and send button

## 6. Backend Documentation
### Core Logic
- PDF processing and vectorization
- Message handling and AI response generation
- Document storage and retrieval
- User authentication and session management

### Services and Layers
- **tRPC Routers:** Define and handle API endpoints
- **Prisma Client:** Database operations and models
- **AI Services:** OpenAI integration for document understanding
- **Vector Database:** Pinecone for semantic search capabilities
- **File Storage:** UploadThing for PDF storage

## 8. Testing
Testing frameworks and methodologies are not explicitly defined in the provided files.

## 9. Development Guidelines
### Coding Standards
- ESLint and Prettier for code formatting and linting
- TypeScript for type safety

## 10. Onboarding Checklist
### Setup Instructions
1. Clone the repository
2. Install dependencies with `yarn install`
3. Set up environment variables according to `.env.example`
4. Run database migrations with `npx prisma migrate dev`
5. Start the development server with `yarn dev`

### Environment Variables
Required environment variables include:
- Database connection string
- Kinde Auth credentials
- OpenAI API key
- Pinecone API key and environment
- UploadThing API keys

### Project Assumptions
- The application handles various PDF types
- There are limitations based on AI model context windows

For more details checkout the following files: [src/app/api/uploadthing/core.ts, src/lib/openai.ts, src/lib/pinecone.ts, prisma/schema.prisma, src/trpc/index.ts, src/components/chat/ChatWrapper.tsx, src/components/chat/ChatInput.tsx, src/app/dashboard/[fileid]/page.tsx, package.json, .env.example, README.md]