![Quiz app logo](https://quiz-app-ercj.onrender.com/img/logo.png)

# Full-stack Quiz Game

A quiz game to test your general knowledge!

- Backend includes authorization & authentication
- Server-side rendering with Pug
- Stores high scores on a MongoDB database

# Technologies used

- Node.js
- Express.js
- MongoDB
- Pug

# How to Install and Run the Project

the repo contains all the files that you need to run the project locally, but since the project is public, for security reasons it does NOT contain my credentials

such credentials should be inserted in a config.env file with the following structure:

```
NODE_ENV=development
PORT=3000
DATABASE=(your database link here)
DATABASE_PASSWORD=(your database password here)

JWT_SECRET=(your secret here)
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90 #90days

ADMIN_PASSWORD=(your admin password)
```

there are two ways to solve this,

1. The easiest way: let me know that you want to deploy your own local version of this app, and I'll share my credentials with you

If you decide to proceed this way, then all you need to do after grabbing the project is:

- create a config.env with a structure similar to what you can see above, and replace with the credentials that I've sent you
- npm run dev

2. the other way to run the project is to:

- [create your own MongoDB deployment](https://www.mongodb.com/)

after everything is set up, create a config.env file similar to what's shown above and fill out the necessary credentials with your own

## Creating your own questions

If you've decided to create your own MongoDB instance, you'll need to create some questions in order to actually play the game

```
Send POST request to http://127.0.0.1:3000/api/v1/question/many
```

type your questions and answers in the body, like so:

```
[
    {
        "author": "authorName",
        "question": "some question",
        "answers": ["answer 1", "answer 2", "answer 3", "answer 4"],
        "correctAnswer": 2,
        "password": "test1234"
    },
    {
        "author": "authorName",
        "question": "another question",
        "answers": ["answer 1", "answer 2", "answer 3", "answer 4"],
        "correctAnswer": 3,
        "password": "test1234"
    },
    (...)
]
```

replace "test1234" with whatever admin password you inserted in the config.env file

after you've created some questions, you deploy and play the game

```
npm run dev
```
