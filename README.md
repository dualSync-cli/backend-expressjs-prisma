# ⚡ Express.js + Prisma Backend

Express.js + TypeScript + Prisma ORM template.

## Stack

- Express.js
- TypeScript
- Prisma ORM (PostgreSQL)

## Getting Started

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your database URL

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Run in development mode
npm run dev
```

## Scripts

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm start`       | Run production build     |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to DB        |
| `npm run db:migrate` | Run migrations        |
| `npm run db:studio` | Open Prisma Studio     |

## API Endpoints

| Method | Endpoint     | Description      |
|--------|--------------|------------------|
| GET    | /            | Welcome message  |
| GET    | /health      | Health check     |
| GET    | /users       | List all users   |
| GET    | /users/:id   | Get user by ID   |
| POST   | /users       | Create user      |
| PUT    | /users/:id   | Update user      |
| DELETE | /users/:id   | Delete user      |

## Project Structure

```
src/
├── index.ts
├── lib/
│   └── prisma.ts
├── routes/
│   ├── index.ts
│   └── users.ts
└── middleware/
    └── errorHandler.ts
prisma/
└── schema.prisma
```
