# Simple web template using mern stack + a few additions:
- MongoDB (mongoose)
- ExpressJS
- React
- NodeJS
- Redux
- Basic authentication (working in production mode only as it is done via expressJS)


# Installation
- npm install
- cd client & npm install

# RUN

## Start express backend on default port 3001
node bin/www

## For development bring up a separate react dev server on default port 3000
cd client & yarn start
browse to http://localhost:3000

## For Production
## Compile client
cd client & yarn build
browse to http://localhost:3001


# Details
Server runs node.js on port 3001
Client runs on port 3000
In production, express serves the entire application (client + server) on port 3001 and auth is handled through express 
In Development, express serves the server while react dev server runs the client - easier to code (quick compile) but auth is not possible in react.
