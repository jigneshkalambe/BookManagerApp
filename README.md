# BookManagerApp

BookManagerApp is a React application that allows users to manage a collection of books. The app supports CRUD (Create, Read, Update, Delete) operations on book data. It uses Axios for making HTTP requests to a JSON server.

## Features

- **Add Book**: Add a new book to the collection.
- **View Book Details**: View detailed information about a specific book.
- **Update Book**: Update the details of an existing book.
- **Delete Book**: Remove a book from the collection.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/BookManagerApp.git

2. Navigate to the project directory:
  cd BookManagerApp

3. Install the dependencies:
  npm install

4. Start the JSON server:
   Type this in cmd: json-server --watch db.json --port 3001

5. In a new terminal, run the React application:
   npm start

The application uses a JSON server to handle API requests. The backend server should be running on http://localhost:3001 and support the following endpoints:

GET /books: Fetch all books.
POST /books: Add a new book.
DELETE /books/:id: Delete a book by ID.
PUT /books/:id: Update a book by ID.

The JSON server is configured using a db.json file which contains the initial data for the books.

# Usage

# Add a Book
  1. Fill in the book details in the input form.
  2. Click the "Add Data" button to add the book to the collection.

# View Book Details
  1. Click on a book in the list to view its details.
  2. Detailed information will be displayed in a separate view.

# Update a Book
  1. Click the "View" button on a book to open the update modal.
  2. Modify the book details in the modal.
  3. Click the "Update" button to save changes.

# Delete a Book
  1. Click the "Delete" button on a book to remove it from the collection.

# Acknowledgements
  React
  Axios
  JSON Server
   
