---

# 📋 To-Do List (Markdown Version)

```markdown
# Project MVP To-Do List

## Task 1: Setup
- [ ] Create project folder `digital-bookshelf-api`
- [ ] Run `npm init -y`
- [ ] Install dependencies (`express`, `mongoose`, `dotenv`)
- [ ] Create folders: `db`, `models`, `routes`
- [ ] Create `server.js`
- [ ] Add `.env` with `PORT` + `MONGO_URI`
- [ ] Create `.gitignore` with:
  - [ ] `node_modules/`
  - [ ] `.env`

---

## Task 2: Database Connection

- [ ] Create `db/connection.js`
- [ ] Import `mongoose`
- [ ] Connect using `mongoose.connect(process.env.MONGO_URI)`
- [ ] Log success or error
- [ ] Require the connection in `server.js`

---

## Task 3: Book Schema & Model

- [ ] Create `models/Book.js`
- [ ] Import `mongoose`
- [ ] Define schema:
  - [ ] `title: String, required`
  - [ ] `author: String, required`
  - [ ] `isbn: String, unique`
  - [ ] `publishedDate: Date`
  - [ ] `inStock: Boolean, default: true`
- [ ] Compile model: `mongoose.model("Book", BookSchema)`
- [ ] Export the model

---

## Task 4: Book Routes (CRUD)

- [ ] Create `routes/bookRoutes.js`
- [ ] Import `express` and Book model
- [ ] Create router with `express.Router()`
- [ ] Add routes with async/await:
  - [ ] POST `/` → create a book
  - [ ] GET `/` → get all books
  - [ ] GET `/:id` → get one book
  - [ ] PUT `/:id` → update book
  - [ ] DELETE `/:id` → delete book
- [ ] Use try/catch for error handling
- [ ] Export router

---

## Task 5: Server Configuration

- [ ] In `server.js`, import express
- [ ] Use `express.json()`
- [ ] Import routes
- [ ] Mount routes at `/api/books`
- [ ] Start server on `process.env.PORT`
