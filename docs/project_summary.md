# PDF AI Chat Application

## 1. Overview
### Project Name
PDF AI Chat

### Purpose
This application enables users to upload PDF documents and interact with them through an AI-powered chat interface. The system processes the uploaded PDFs, indexes their content, and allows users to ask questions about the document content. The AI assistant responds with relevant information extracted from the document, providing a conversational interface to explore PDF content without having to manually read through the entire document.

### Key Features
- PDF document upload and management
- Document content indexing and vector storage with Pinecone
- AI-powered conversational interface for document queries
- Real-time chat with context-aware responses
- User authentication and dashboard for document management
- Fullscreen PDF viewing capability
- Message streaming for responsive AI interactions

## 2. Architecture Overview
### Type of Application
Full-stack application with AI integration

### Data Flow
1. Users upload PDF documents through the interface
2. The system processes and indexes the PDF content using vector embeddings
3. Indexed content is stored in Pinecone for efficient semantic search
4. Users can view their documents and initiate chat conversations
5. User queries are processed by the AI using OpenAI's API
6. Relevant context from the document is retrieved from Pinecone
7. AI generates responses based on document content and user queries
8. Responses are streamed back to the user interface in real-time

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js, React
- **CSS Framework:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui
- **Key Libraries:** react-pdf for PDF rendering, react-dropzone for file uploads
- **State Management:** React Context API for chat state management

### Backend
- **Framework/Language:** Next.js API routes, tRPC
- **Authentication:** Kinde Auth for user authentication and authorization
- **Core Libraries:** Prisma for database operations
- **Validation:** Zod for schema validation

### Database
- **Type:** Relational
- **Technology:** Uses Prisma ORM (database appears to be SQL-based)
- **Schema:** Defined in prisma/schema.prisma with models for User, File, and Message

### AI Usage
- **Purpose:** Document question answering, natural language processing
- **Tools:** OpenAI API for generating responses, Pinecone for vector storage and semantic search

### Cloud Services
- **Integrations:** Uploadthing for file storage, Pinecone for vector database

## 4. API Documentation
### Overview
The application uses tRPC for type-safe API interactions between frontend and backend.

### Endpoint Details
The tRPC router includes endpoints for:
- Getting user files
- Deleting files
- Getting file messages
- Sending messages to chat with documents

## 5. Frontend Documentation
### Views and Navigation
- **Landing Page:** Introduction and features overview
- **Dashboard:** List of uploaded documents
- **Document View:** PDF viewer with chat interface
- **Auth Callback:** Handles authentication flow

### Components
- **MaxWidthWrapper:** Container for consistent layout
- **Navbar & MobileNav:** Navigation components
- **Dashboard:** Shows user's uploaded documents
- **UploadButton:** Handles PDF upload functionality
- **PdfRenderer:** Renders PDF documents with viewer controls
- **ChatWrapper:** Contains the messaging interface for document queries
- **ChatInput:** User input for asking questions about documents, with keyboard shortcuts
- **Messages:** Displays conversation history

### State Management
- **ChatContext:** React Context used to manage chat state including:
  - Message history storage and retrieval
  - Loading state management
  - Real-time message handling
  - Stream processing for AI responses
  - Optimistic updates for immediate feedback
  - Error handling for failed message sends

## 6. Backend Documentation
### Core Logic
- File upload and processing using Uploadthing
- Document indexing and vector storage with Pinecone
- Message handling and AI response generation with OpenAI
- User authentication and session management with Kinde Auth

### Database Operations
- Prisma ORM is used for database interactions
- Models include User, File, and Message
- Relationships between users, their files, and associated messages

### Security
- Authentication middleware controls access to protected routes
- Route protection for `/dashboard` and other private pages
- User verification for file access to prevent unauthorized viewing

## 7. Middleware
- Authentication middleware validates user sessions
- Protects designated routes like `/dashboard` and `/auth-callback`
- Redirects unauthenticated users as appropriate
- Validates file ownership before allowing access to document pages

## 8. Testing
No explicit testing frameworks were identified in the project structure.

## 9. Development Guidelines
### Environment Variables
Required environment variables include:
- Database connection string
- Authentication provider settings (Kinde Auth configuration)
- OpenAI API key
- Pinecone API key and environment
- Uploadthing API keys

### Validation
- Message input validation using Zod schemas
- File access validation checks

## 10. Onboarding Checklist
### Setup Instructions
1. Clone the repository
2. Install dependencies with `yarn install`
3. Set up environment variables (reference .env.example)
4. Set up database with Prisma migrations
5. Start the development server with `yarn dev`

### Required Services
- OpenAI API account
- Pinecone vector database account
- Uploadthing account for file storage
- Kinde Auth for authentication
- Database (PostgreSQL recommended based on Prisma schema)

For more details checkout the following files: [src/app/api/uploadthing/core.ts, src/lib/pinecone.ts, src/lib/openai.ts, prisma/schema.prisma, src/components/chat/ChatWrapper.tsx, src/trpc/index.ts, src/components/pdf/PdfRenderer.tsx, src/context/ChatContext.tsx, src/components/chat/ChatInput.tsx, src/lib/validators/sendMessageValidator.ts, src/middleware.ts]