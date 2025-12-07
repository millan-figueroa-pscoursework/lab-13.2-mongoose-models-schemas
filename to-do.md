---

# 📋 To-Do List (Markdown Version)

```markdown
# Project MVP To-Do List

## Task 1: Setup
- [x] Create project folder `digital-bookshelf-api`
- [x] Run `npm init -y`
- [x] Install dependencies (`express`, `mongoose`, `dotenv`)
- [x] Create folders: `db`, `models`, `routes`
- [x] Create `server.js`
- [x] Add `.env` with `PORT` + `MONGO_URI`
- [x] Create `.gitignore` with:
  - [x] `node_modules/`
  - [x] `.env`

---

## Task 2: Database Connection

- [x] Create `db/connection.js`
- [x] Import `mongoose`
- [x] Connect using `mongoose.connect(process.env.MONGO_URI)`
- [x] Log success or error
- [x] Require the connection in `server.js`

---

## Task 3: Book Schema & Model

- [x] Create `models/Book.js`
- [x] Import `mongoose`
- [x] Define schema:
  - [x] `title: String, required`
  - [x] `author: String, required`
  - [x] `isbn: String, unique`
  - [x] `publishedDate: Date`
  - [x] `inStock: Boolean, default: true`
- [x] Compile model: `mongoose.model("Book", BookSchema)`
- [x] Export the model

---

## Task 4: Book Routes (CRUD)

- [x] Create `routes/bookRoutes.js`
- [x] Import `express` and Book model
- [x] Create router with `express.Router()`
- [x] Add routes with async/await:
  - [x] POST `/` → create a book
  - [x] GET `/` → get all books
  - [x] GET `/:id` → get one book
  - [x] PUT `/:id` → update book
  - [x] DELETE `/:id` → delete book
- [x] Use try/catch for error handling
- [x] Export router

---

## Task 5: Server Configuration

- [x] In `server.js`, import express
- [x] Use `express.json()`
- [x] Import routes
- [x] Mount routes at `/api/books`
- [x] Start server on `process.env.PORT`
