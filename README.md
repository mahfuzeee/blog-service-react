# Blog Service Frontend

A React frontend for a blog service. Users can browse blog posts, read and
write comments, register and log in, and create, edit, or delete their own
posts. Administrators can access the admin area to manage blog content.

## Tech Stack

- React 19
- Vite
- React Router
- TanStack React Query
- Axios
- Tailwind CSS v4

## Requirements

- Node.js 18 or newer
- A running blog service API

## Getting Started

1. Clone the repository and open the project directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file:

   ```bash
   cp example.env .env
   ```

4. Set the API URL in `.env`:

   ```env
   VITE_API_BASE_URL
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

Vite will print the local URL in the terminal, usually
`http://localhost:5173`.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Main Routes

| Route             | Description                                    |
| ----------------- | ---------------------------------------------- |
| `/`               | Browse all blog posts                          |
| `/blogs/:id`      | View a single post and its comments            |
| `/login`          | Sign in                                        |
| `/register`       | Create an account                              |
| `/create`         | Create a post; authentication required         |
| `/blogs/:id/edit` | Edit a post; authentication required           |
| `/admin`          | Admin dashboard; administrator access required |
| `/unauthorized`   | Access denied page                             |

## Environment Variables

| Variable            | Description                       | Default                        |
| ------------------- | --------------------------------- | ------------------------------ |
| `VITE_API_BASE_URL` | Base URL for the blog service API | `http://localhost:3000/api/v1` |

Only variables prefixed with `VITE_` are exposed to the Vite client. Do not
place secrets in frontend environment variables.

## Project Structure

```text
src/
├── apis/         API clients and React Query hooks
├── components/   Reusable UI and route-protection components
├── context/      Authentication context
├── pages/        Application route pages
└── utils/        Shared helper functions
```

## Production Build

Build the application with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory and can be served by
any static hosting provider configured to support client-side routing.
