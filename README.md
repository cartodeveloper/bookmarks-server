# Bookmarks Server

Express server for [Bookmarks-Client](https://github.com/Thinkful-Ed/bookmarks-app/)

## Key Terms:

- Vertical & Horizontal Layering
- Modularizing
- Modules
- Routing
- Referential Integrity

## Requirements

1. Use the boilerplate to start a new application named bookmarks-server
2. Configure logging and API key handling middleware on the server
3. Write a route handler for the endpoint GET /bookmarks that returns a list of bookmarks.
4. Write a route handler for the endpoint GET /bookmarks/:id that returns a single bookmark with the given ID, return 404 Not Found if the ID is not valid
5. Write a route handler for POST /bookmarks that accepts a JSON object representing a bookmark and adds it to the list of bookmarks after validation.
6. Write a route handler for the endpoint DELETE /bookmarks/:id that deletes the bookmark with the given ID.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's main branch.
