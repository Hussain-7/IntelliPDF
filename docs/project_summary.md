# Project Documentation

## 1. Overview
### Project Name
Caller Repo

### Purpose
The Caller Repo project is a full-stack application designed to facilitate communication and file management. It aims to solve the problem of efficient message handling and file uploads for users who need a streamlined interface for these tasks. The target users are individuals or organizations requiring a robust platform for managing communications and documents. The project provides functionalities such as user authentication, message exchange, file uploads, and a dashboard for managing these interactions.

### Key Features
- User authentication and authorization
- Message handling and exchange
- File upload and management
- Dashboard for user interaction and file management
- Integration with external services for enhanced functionality
- **New Feature:** Admin Dashboard for managing system statistics and settings

## 2. Architecture Overview
### Type of Application
Full-stack

## 3. Technology Stack
### Frontend
- **Framework/Library:** React
- **CSS Frameworks:** Tailwind CSS

### Backend
- **Framework/Language:** Node.js
- **Core Libraries:** tRPC for API handling

### Database
- **Type:** Relational
- **Technology:** Prisma ORM

### AI Usage
- **Tools:** OpenAI for natural language processing

## 4. API Documentation
### Endpoint Details
- **Auth API:** Handles user authentication routes
- **Message API:** Manages message-related routes
- **File Upload API:** Manages file upload routes

## 5. Frontend Documentation
### Views and Navigation
- **Dashboard:** Central hub for user interactions
- **Auth Callback:** Handles authentication redirects
- **Admin Dashboard:** Provides system statistics and settings management for admin users

### Styling
- Utilizes Tailwind CSS for styling and responsive design

## 6. Backend Documentation
### Core Logic
- Handles business logic for user authentication, message processing, and file management

### Services and Layers
- Organized into controllers and services for modularity

## 9. Development Guidelines
### Coding Standards
- ESLint for JavaScript code quality
- Prettier for code formatting

### CI/CD Pipelines
- GitHub Actions for continuous integration and deployment

## 10. Onboarding Checklist
### Setup Instructions
- Clone the repository
- Install dependencies using Yarn
- Configure environment variables using `.env.example`
- Start the application with the provided scripts

For more details checkout the following files: [README.md, package.json, .env.example]