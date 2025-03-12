# Project Documentation

## Introduction
This comprehensive documentation is designed for developers onboarding onto the Caller Repo project, a full-stack application that facilitates user interactions and data management through a web interface. It targets users in business environments who require efficient communication and data handling capabilities.

## 1. Overview
### Project Name
Caller Repo

### Purpose
The Caller Repo project is a full-stack application aimed at enhancing business communication and data management. It provides a robust platform for managing messages, file uploads, and user authentication. The application integrates functionalities such as real-time chat, file management, and user account navigation, offering a seamless user experience. It is designed for users who need a reliable system for handling business communications and data efficiently.

### Key Features
- Real-time chat functionality with message input and status tracking
- User authentication and authorization using KindeAuth
- File upload and management capabilities
- Dashboard for user account management and navigation
- Integration with OpenAI for enhanced data processing
- Responsive design with Tailwind CSS

## 2. Architecture Overview
### Type of Application
Full-stack

### Data Flow
- **Input Processes:** User messages and file uploads
- **Data Processing:** Real-time chat and AI-enhanced data handling
- **Storage/Output Mechanisms:** Managed through a relational database using Prisma ORM

## 3. Technology Stack
### Frontend
- **Framework/Library:** React
- **CSS Frameworks:** Tailwind CSS
- **Key Libraries:** Shadcn-ui for UI components

### Backend
- **Framework/Language:** Node.js
- **Authentication:** KindeAuth
- **Core Libraries:** Express.js for server-side operations

### Database
- **Type:** Relational
- **Technology:** PostgreSQL with Prisma ORM

### AI Usage
- **Purpose:** Data processing and enhancement
- **Tools:** OpenAI, Langchain for PDF loading/OCR

### Cloud Services
- **Infrastructure:** AWS S3 for file uploads via Uploadthing
- **Integrations:** Pinecone for vector database operations

## 4. API Documentation
### Endpoint Details
- **/api/auth/[kindeAuth]/route.ts:** Handles user authentication
- **/api/message/route.ts:** Manages message-related operations
- **/api/trpc/[trpc]/route.ts:** Facilitates TRPC-based API calls
- **/api/uploadthing/route.ts:** Manages file upload operations

## 5. Frontend Documentation
### Views and Navigation
- **Main Pages:** Admin, Dashboard, Auth Callback
- **Navigation Flow:** Home → Dashboard → Admin

### Styling
- Utilizes Tailwind CSS for responsive design and theming

## 6. Backend Documentation
### Core Logic
- Handles business rules related to user authentication, messaging, and file uploads

### Services and Layers
- Organized into controllers and service layers for modularity

### Database Operations
- Defined using Prisma ORM with models for User, File, and Message

## 10. Onboarding Checklist
### Setup Instructions
- Clone the repository
- Install dependencies using Yarn or npm
- Configure environment variables as per `.env.example`
- Start the application using `yarn run dev` or `npm run dev`

For more details checkout the following files: [README.md, package.json, schema.prisma]