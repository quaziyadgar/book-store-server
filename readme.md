Book Store REST API
A RESTful API for managing a book store, built with Node.js, Express, and MongoDB Atlas (SQL cluster). The API follows the MVC pattern, uses ES Modules (type: "module"), and supports CRUD operations for books.
Features

Endpoints:
GET /books: Retrieve all books.
POST /books: Create a new book.
PUT /books/:id: Update a book by ID.
DELETE /books/:id: Delete a book by ID.


Database: MongoDB Atlas SQL cluster, using the sample_mflix database with a books collection.
Seeding: Includes a script to seed sample book data.
Environment Variables: Uses dotenv for configuration.

Project Structure
bookstore/
├── models/
│   └── book.js           # Book schema
├── controllers/
│   └── bookController.js # Business logic for endpoints
├── routes/
│   └── bookRoutes.js     # API routes
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── app.js                # Main application
├── seedData.js           # Database seeding script
├── package.json          # Dependencies and scripts
└── nodemon.json          # Nodemon configuration

Prerequisites

Node.js: Version 14 or higher (for ES Modules support).
MongoDB Atlas Account: Required for the database.
MongoDB Atlas SQL Cluster: Configured with a database user and network access.
Git (optional): For version control.

Setup Instructions
1. Clone the Repository
git clone <repository-url>
cd bookstore

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file in the project root with the following:
MONGODB_URI=mongodb://<username>:<password>@atlas-sql-683a9e7495478510881e31c7-xkrlg2.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin
PORT=3000


Replace <username> and <password> with your MongoDB Atlas database user credentials.
Ensure the password is URL-encoded if it contains special characters (e.g., @ as %40).
The URI targets the sample_mflix database. Update to bookstore if using a different database.

4. Configure MongoDB Atlas

Create a Database User:
In MongoDB Atlas, go to Database Access.
Add a user with readWrite permissions for the sample_mflix database or readWriteAnyDatabase or you can go with my database.