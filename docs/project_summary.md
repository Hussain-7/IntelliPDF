# Project Documentation

## 1. Overview

### Project Name
AI-Based PDF Dropbox

### Purpose
The AI-Based PDF Dropbox project is designed to streamline the integration of user authentication, file uploads, and real-time messaging into web applications. It addresses common business challenges by providing developers with a robust framework to manage user accounts, handle file uploads, and enable chat functionalities. The project is particularly aimed at developers who need to implement these features efficiently and effectively. It offers a structured and scalable architecture that supports seamless integration with third-party services such as OpenAI, enhancing the application's capabilities with AI-driven functionalities.

### Key Features
- User authentication and authorization using OAuth2 via KindeAuth
- File upload management with support for W2 form uploads
- Real-time messaging and chat interface
- Dashboard for user interaction and file management
- Integration with AI services like OpenAI for advanced functionalities

## 2. Architecture Overview

### Type of Application
Full-stack

### Data Flow
The application processes user input through a frontend interface, manages data via API endpoints, and stores information in a relational database. Key data flow components include:
- User authentication requests processed through the `auth` API.
- File uploads managed by the `uploadthing` module.
- Real-time messages handled by the `message` API.
- AI-driven processing of messages using OpenAI and Pinecone.

## 3. Technology Stack

### Frontend
- **Framework/Library:** React
- **CSS Frameworks:** Tailwind CSS
- **Key Libraries:** TRPC for remote procedure calls

### Backend
- **Framework/Language:** Node.js
- **Authentication:** OAuth2 via KindeAuth

### Database
- **Type:** Relational
- **Technology:** PostgreSQL with Prisma ORM

### AI Usage
- **Purpose:** Integration with OpenAI for enhanced functionalities such as processing and responding to tax-related queries
- **Tools:** OpenAI API, Pinecone

### Cloud Services
- **Integrations:** Utilizes third-party services like OpenAI and Pinecone for AI functionalities

### DevOps/Infrastructure
- **CI/CD Tools:** GitHub Actions for automated testing and deployment

## 4. API Documentation

### Endpoint Details
- **Auth API:** Handles user authentication and authorization.
- **Message API:** Manages real-time messaging functionalities.
- **Upload API:** Facilitates file uploads and management.

## 5. Frontend Documentation

### Views and Navigation
- **Dashboard:** Main user interface for managing files and messages.
- **Auth Callback:** Handles OAuth2 callback for user authentication.

### Styling
- Utilizes Tailwind CSS for responsive design and theming.

## 6. Backend Documentation

### Core Logic
- Business logic for user authentication, file uploads, and messaging is encapsulated within respective API routes.

### Services and Layers
- **Controllers:** Manage API request handling.
- **Services:** Implement core functionalities like authentication and file management.

## 9. Development Guidelines

### Coding Standards
- ESLint for JavaScript code quality and consistency.

### Branching Strategy
- Feature branching for isolated development and integration.

### CI/CD Pipelines
- Automated testing and deployment using GitHub Actions.

## 10. Onboarding Checklist

### Access Requirements
- GitHub access for repository cloning
- API keys for third-party services like OpenAI

### Setup Instructions
- Clone the repository
- Install dependencies using Yarn or npm
- Configure environment variables as per `.env.example`
- Start the application using `yarn run dev` or `npm run dev`

## Missing Context
Missing context: [Architecture Diagram]