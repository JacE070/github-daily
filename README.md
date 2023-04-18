# LeetCode Daily

This web application allows users to track their progress on LeetCode algorithm problems by adding, updating, and deleting completed problems. It is built using React.js for the frontend and Node.js with Express for the backend.

## Table of Contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)

## Features

- User registration and authentication
- Add, update, and delete completed LeetCode problems
- View a list of completed problems
- Single Page Application (SPA) architecture

## Setup and Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/leetcode-daily.git
```

2. Change to the project directory:

```
cd leetcode-daily-tracker
```

3. Install the required dependencies:

```
npm install
cd frontend
npm install
```

4. Create a `.env` file in the root directory of the project with the following variables:

```
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

## Running the Application

1. Start the backend server from the root directory:

```
npm start
```

2. In a separate terminal, start the frontend development server:

```
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
