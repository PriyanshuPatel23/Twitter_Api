# Twitter Clone Backend

## Overview

This is a backend project for a Twitter-like application. The service provides functionality for users, tweets, comments, likes, and hashtags. It uses MongoDB as the database and includes JWT-based authentication for secure user sessions. The project is designed with a modular schema and supports extensive relationships between entities like tweets, comments, likes, and hashtags.

---

## Features

- **User Management**: Register, authenticate, and manage users with password encryption using `bcrypt`.
- **Tweets**: Create, read, and interact with tweets (max 250 characters).
- **Comments**: Nested comments on tweets or other comments with support for likes.
- **Likes**: Like functionality for tweets and comments.
- **Hashtags**: Manage hashtags linked to tweets.
- **JWT Authentication**: Secure API access using JWT tokens.
- **Scalable Architecture**: Mongoose schemas designed for extensibility and relationships.
- **Testing**: Test cases written using `Jest`.

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
MONGO_URI=mongodb://localhost/twitter_Dev
PORT=3000
JWT_SECRET=mysecretkey
SALT=9
```

## Project Setup

### Clone the Repository

```bash
git clone <repository_url>
```

### Install Dependencies

`npm install`

### Start the Application

```
npm start
```

### Test

```
npm test
```

## Database Models

### User

- Attributes: email, password, name
- Methods:
- comparePassword(password): Compares plain text with hashed password.
- genJWT(): Generates a JWT token for the user.

### Tweet

- Attributes: content, likes, comments, image
- Relationships: Has many likes. Has many comments.

### Comment

- Attributes: content, userId, onModel, commentable, likes, comments
- Relationships: Can reference a Tweet or another Comment.
  Has many likes.
  Has nested comments.
  Like
- Attributes: onModel, likeable, user
- Relationships:
  Can reference a Tweet or Comment.
- Hashtag
- Attributes: title, tweets
- Relationships:
  Linked to multiple tweets.
