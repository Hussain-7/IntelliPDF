## To install the project dependencies

- run `yarn or npm install`

## Make sure to populate the environment variables in the `.env` file before running the project

- a copy is provided `.env.exmaple`

## To run the project

- run `yarn run dev or npm run dev`

## libraries used:

1. pinecone - (Vector Database)
2. prisma - (Database ORM)
3. openai - (GPT-4 API)
4. langchain - (PDF LOADING / OCR Type functionality)
5. uploadthing - (File Upload TO S3)
6. shadcn-ui - (UI Library)
7. kindeauth - (Authentication)

### Assumptions:

1. Pdf's uploaded will be only w2-forms
2. Since ai models is trained to answer only the tax related queries.
3. For answering any other queries that context will need to be updated.
