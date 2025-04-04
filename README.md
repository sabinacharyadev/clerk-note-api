# Clerk Note API

## Overview

Clerk Note API is a backend service designed to handle note management functionality. Built using **Node.js**, **Express**, and **MongoDB**, this API allows users to create, read, update, and delete notes efficiently.

## Features

- **User Authentication & Authorization**: Secure authentication using **Clerk**.
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **RESTful API**: Designed with RESTful principles for scalability and maintainability.
- **Error Handling**: Centralized error handling for better debugging.
- **Database Integration**: Uses **MongoDB** with Mongoose for efficient data handling.
- **Middleware Support**: Implements middleware for authentication and request validation.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Clerk

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

First, clone the repository to your local machine:

<code>git clone https://github.com/sabinacharyadev/clerk-note-api.git</code>

### 2. Install Dependencies

Navigate to the root directory and install dependencies:

<code>cd clerk-note-api</code>

<code>yarn</code>

### 3. Set Up Environment Variables

Create a .env file in the root directory and configure the following:

<code>DATABASE_URL</code>
<code>CLERK_PUBLISHABLE_KEY</code>
<code>CLERK_SECRET_KEY</code>

<code>yarn dev</code>

### 4. Run the Application

<code>yarn dev</code>

## API Endpoints

### Notes

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| GET    | `/note`  | Retrieve all notes for a user |
| POST   | `/note`  | Create a new note             |
| PATCH  | `/note`  | Update a note                 |
| DELETE | `/note`  | Delete a note                 |

## Middleware

- **Authentication Middleware**: Ensures only authenticated users can access certain routes.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Push to your branch and submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, contact:

- **GitHub**: [sabinacharyadev](https://github.com/sabinacharyadev)
