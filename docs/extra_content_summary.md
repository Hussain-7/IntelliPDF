### README.md Summary
- **Installation**: Use `yarn` or `npm install` to install dependencies.
- **Environment Setup**: Populate environment variables in the `.env` file using the provided `.env.example`.
- **Running the Project**: Execute `yarn run dev` or `npm run dev`.
- **Libraries Used**:
  1. Pinecone (Vector Database)
  2. Prisma (Database ORM)
  3. OpenAI (GPT-4 API)
  4. Langchain (PDF Loading/OCR)
  5. Uploadthing (File Upload to S3)
  6. Shadcn-ui (UI Library)
  7. Kindeauth (Authentication)
- **Assumptions**:
  1. Only W2-form PDFs are uploaded.
  2. AI models are trained for tax-related queries.
  3. Context update needed for non-tax queries.

### middleware.ts Summary
- **Functionality**: Implements authentication middleware using `withAuth` from `@kinde-oss/kinde-auth-nextjs`.
- **Configuration**: Applies to paths `/dashboard/:path*` and `/auth-callback`.

### package.json Summary
- **Project Name**: ai-based-pdf-dropbox
- **Version**: 0.1.0
- **Scripts**:
  - `dev`: Start development server.
  - `build`: Generate Prisma client and build project.
  - `start`: Start production server.
  - `lint`: Run linter.
  - `push`: Generate Prisma client and push database changes.
  - `postinstall`: Generate Prisma client.
- **Dependencies**: Includes libraries for form handling, authentication, database, UI components, AI integration, PDF processing, and more.
- **DevDependencies**: Includes TypeScript, ESLint, Tailwind CSS, and Prisma for development purposes.**File: schema.prisma**

- **Purpose**: Defines the database schema using Prisma for a PostgreSQL database.
- **Generator**: Utilizes `prisma-client-js` to generate the client.
- **Datasource**: Connects to a PostgreSQL database using environment variables `DATABASE_URL` and `DIRECT_URL`.
- **Models**:
  - **User**:
    - Fields: `id` (String, unique), `email` (String, unique).
    - Relations: Has multiple `File` and `Message` entries.
  - **File**:
    - Fields: `id` (String, default `cuid()`), `name` (String), `uploadStatus` (enum `UploadStatus`, default `PENDING`), `url` (String), `key` (String), `createdAt` (DateTime, default `now()`), `updatedAt` (DateTime, auto-update).
    - Relations: Belongs to a `User`, has multiple `Message` entries.
    - Index: `userId`.
  - **Message**:
    - Fields: `id` (String, default `cuid()`), `text` (String, database type Text), `isUserMessage` (Boolean), `createdAt` (DateTime, default `now()`), `updatedAt` (DateTime, auto-update).
    - Relations: Belongs to a `User` and a `File`.
    - Indexes: `userId`, `fileId`.
- **Enum**:
  - **UploadStatus**: Defines possible statuses for file uploads (`PENDING`, `PROCESSING`, `FAILED`, `SUCCESS`).