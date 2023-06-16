# Book Management System with NodeJS And MongoDB

[![My First Workflow](https://github.com/davidmillan5/Book_System_Management/actions/workflows/main.yml/badge.svg)](https://github.com/davidmillan5/Book_System_Management/actions/workflows/main.yml)

## Introduction

Welcome to the Book System Management repository for a library! This project provides a comprehensive system for managing books, users, and borrowing transactions. It is built using [Node.js](https://nodejs.dev/en/), [Express.js](https://expressjs.com/) and utilizes several dependencies to enhance its functionality. The application is deployed on [Render.com](https://render.com/), utilizing a cloud database powered by [MongoDB Atlas](https://www.mongodb.com/atlas/database).

## Dependencies

The Book System Management application relies on the following dependencies:

### Dev Dependencies

[nodemon](https://nodemon.io/) - Automatically restarts the application on file changes during development.

### Dependencies

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) Encrypts and compares passwords for user authentication.
- [cookie-parser](https://github.com/expressjs/cookie-parser#readme) Parses and handles cookies in HTTP requests.
- [date-fns](https://github.com/date-fns/date-fns#readme) Provides date utility functions for parsing, formatting, and manipulating dates.
- [dotenv](https://github.com/motdotla/dotenv#readme) Loads environment variables from a .env file into process.env.
- [express](https://expressjs.com/) Web application framework for Node.js.
- [joi](https://joi.dev/api/?v=17.9.1) Validates and sanitizes user input data.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) Generates and verifies JSON Web Tokens (JWT) for user authentication.
- [mongodb](https://www.mongodb.com/cloud/atlas/register) Official MongoDB driver for Node.js.
- [mongoose](https://mongoosejs.com/docs/index.html) Object Data Modeling (ODM) library for MongoDB.
- [uuid](https://github.com/uuidjs/uuid#readme) Generates universally unique identifiers (UUIDs).

## Deployment Steps

The Book System Management application is deployed on Render.com, utilizing a cloud database powered by MongoDB Atlas.

1. Clone the Repository:

```bash

git clone https://github.com/davidmillan5/Book_System_Management.git

```

2. Change Directory:

```bash

cd Book_System_Management

```

3. Install Dependencies:

```bash

npm install

```

4.Configure Environment Variables:

- Rename the .env.example file to .env.
- Open the .env file and provide the required configuration values. For example, you may need to set the database connection details or other environment-specific settings.

5. Run the Application:

```bash

npm start

```

6. Access Application:

Once the application is successfully running, you can access it in your web browser by navigating to http://localhost:3000.

Also you can verify the endpoints of the app in the following link in render where the actual
app reside: [Book System Management](https://book-system-management-2.onrender.com/)

## Testing

The Book System Management application has been thoroughly tested using Postman.

## Postman - Endpoints

[Postman EndPoints](https://documenter.getpostman.com/view/24562678/2s93sgVVD1#5a06d053-f6bc-4ea9-8cd2-6375d3fe9cc9)

```

```
