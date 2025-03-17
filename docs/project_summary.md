# Project Documentation: AI-Powered PDF Chat Application

## 1. Overview
### Project Name
AI PDF Chat

### Purpose
This application allows users to upload PDF documents and interact with them through an AI-powered chat interface. It analyzes the PDF content and enables users to ask questions about the document's content, with the AI providing context-aware responses. The system leverages natural language processing to understand document contents and user queries, making document information retrieval more intuitive and conversational.

### Key Features
- PDF document upload and management
- Document processing and indexing for AI comprehension
- Real-time AI chat interface for document interaction
- User authentication and document persistence
- Full-screen PDF viewing capabilities
- Responsive design across devices

## 2. Architecture Overview
### Type of Application
Full-stack web application

### Data Flow
1. Users upload PDF documents through the interface
2. Documents are processed, stored, and indexed for AI retrieval
3. The system uses vector embeddings to enhance document understanding
4. Users can chat with the AI about document content
5. AI queries the indexed document data to provide relevant responses
6. Chat history is maintained throughout the session

## 3. Technology Stack
### Frontend
- **Framework/Library:** Next.js (React framework)
- **State Management:** React Context API
- **CSS Frameworks:** Tailwind CSS with shadcn/ui components
- **Key Libraries:** react-pdf, react-hook-form, react-dropzone

### Backend
- **Framework/Language:** Next.js API routes, tRPC
- **Authentication:** Clerk for user management and authentication
- **Core Libraries:** Prisma ORM, Uploadthing for file uploads

### Database
- **Type:** Relational
- **Technology:** PostgreSQL (managed through Prisma ORM)
- **Key Models:** Message, File, User relationships

### AI Usage
- **Purpose:** Document understanding and contextual chat responses
- **Tools:** OpenAI API, Pinecone for vector database storage
- **Processing:** PDF content extraction and semantic analysis

### Cloud Services
- **Infrastructure:** Vercel (deployment)
- **Integrations:** Uploadthing (file handling), Pinecone (vector database)

## 4. Frontend Documentation
### Views and Navigation
- **Landing Page:** Introduction to the application
- **Dashboard:** Overview of uploaded documents
- **Document View:** PDF viewer with chat interface
- **Authentication:** Login/signup flows

### State Management
- Context API for chat state management
- Real-time message updates and history preservation

### Styling
- Tailwind CSS for responsive design
- Customized UI components based on shadcn/ui library

## 5. Backend Documentation
### Core Logic
- Document processing pipeline
- Vector embedding generation from document content
- Semantic search for relevant document sections
- AI response generation based on document context

### Services and Layers
- tRPC routes for type-safe API calls
- Uploadthing integration for file management
- OpenAI integration for chat functionality
- Pinecone for vector storage and similarity search

### Database Operations
- Prisma ORM for database interactions
- File and message storage with relations to users

## 6. Key Components
### PDF Handling
- `PdfRenderer.tsx`: Renders PDF documents with interactive features
- `PdfFullscreen.tsx`: Provides fullscreen viewing capability

### Chat Interface
- `ChatWrapper.tsx`: Main container for the chat functionality
- `ChatInput.tsx`: User input component for queries
- `Messages.tsx`: Displays conversation history
- `Message.tsx`: Individual message component

### File Management
- `UploadButton.tsx`: Handles document uploads
- `Dashboard.tsx`: Displays user's document library

### Authentication
- Clerk integration for user management
- Protected routes with middleware

## 7. Setup Instructions
### Environment Variables
Required environment variables (from `.env.example`):
- Database configuration
- API keys for OpenAI, Pinecone, Clerk, and Uploadthing
- Next.js configuration

### Installation
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## 8. API Structure
The application uses tRPC for type-safe API calls between the frontend and backend, with key procedures including:
- Document uploading and processing
- Message sending and retrieval
- Authentication verification

For more details checkout the following files: [src/trpc/index.ts, src/lib/pinecone.ts, src/lib/openai.ts, prisma/schema.prisma, src/app/api/uploadthing/core.ts]