### Documentation

### How to run client

_npm i in the client folder to install deps_

_create .env file and copy the variables from .env.example file to it_

_npm run dev to start the client_

### How to run the backend

_npm i in the backend folder to install deps_

_create .env file and copy the variables from .env.example file to it_

_npm run start:dev to start the backend_

_create a postgres database and insert its name in .env_

_to run the migration type npm run migration:run_

_to create the migration firstly build the project with npm run build then write npm run migration:generate_

### Versions

**Node: 20**

**Postgres: 16**

### Deploy

**Client: https://next-nest-graphql-test.vercel.app/**

**Backend: https://next-nest-graphql-test.onrender.com**

**Db was also deployed on Render**

### Additional info

Api key is correctly set on deploy therefore you won't get unauthorized error, however it throws an error when the key is incorrect, you can provide any key you want in .env as long as it the same both on client and server

Tests on the backend are written in post.resolver.spec.ts

On client in __tests__ folder

Redux was also considered to be used here but found no need to do it, but it could have been easily implemented


