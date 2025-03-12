# Technical Documentation Summary

## pinecone.ts
A simple initialization file for Pinecone vector database client, configuring it with an API key from environment variables.

## route.ts
Handles POST requests for messaging functionality with these key features:
- User authentication via Kinde
- Message validation and storage in database
- Vector search in Pinecone to retrieve relevant document sections
- OpenAI streaming completions API integration for generating responses
- Context management including previous conversations and W2 form data

## ChatContext.tsx
React context provider for chat functionality:
- Manages message state and loading indicators
- Uses React Query for mutations to send messages
- Implements optimistic updates for UI responsiveness
- Handles streaming responses from the API with proper state management
- Provides error handling and recovery mechanisms

## Messages.tsx
React component for rendering chat messages with:
- Infinite scrolling implementation with intersection observer
- Loading states and empty state handling
- Integration with the ChatContext
- Skeleton loaders for improved UX during loading

## PdfRenderer.tsx
PDF document viewer component with extensive functionality:
- Page navigation controls
- Custom page input with validation
- Zoom/scale controls
- Document rotation
- Fullscreen capability
- Responsive design with resize detection
- Loading indicators and error handling

## README.md
Project documentation covering:
- Installation instructions
- Environment setup requirements
- Development commands
- List of key libraries used (Pinecone, Prisma, OpenAI, Langchain, etc.)
- Application assumptions (W2 tax forms focused)