import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/book.js';

// Load environment variables
dotenv.config();

// Sample book data
const books = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 10.99,
    publishedDate: new Date('1951-07-16')
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 11.49,
    publishedDate: new Date('1932-01-01')
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 14.99,
    publishedDate: new Date('1937-09-21')
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    price: 8.49,
    publishedDate: new Date('1847-10-16')
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 19.99,
    publishedDate: new Date('1954-07-29')
  }
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Connect to MongoDB Atlas SQL cluster
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas (sample_mflix database)');

    // Insert sample books into the 'books' collection
    const insertedBooks = await Book.insertMany(books);
    console.log(`Seeded ${insertedBooks.length} books successfully into the books collection`);

    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();