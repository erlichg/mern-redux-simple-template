# Simple web template using mern stack + a few additions:
- MongoDB
- ExpressJS
- React
- NodeJS
- Redux
- Basic authentication (working in production mode only as it is done via expressJS)


# Installation
- npm install
- cd client & npm install

# DEVELOPMENT
## Start server
node bin/www

## Start client
cd client & npm start


## PRODUCTION
## Compile client
cd client & npm run build

## Run Server
env=PRODUCTION node bin/www

# Connection
browse to http://localhost:3000

# Details
Server runs node.js on port 3001
Client runs on port 3000
In production, express serves the entire application (client + server) so auth is through exress
In Development, express serves the server while react dev server runs the client - easier to code (quick compile).
