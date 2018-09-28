This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The server files are inside /server folder - this is where routes to be renderd on the server should be defined
/middleware is the middleware that actually renders the code to string before sending to the browser

It is sufficient to build the FE and then start the server, no need to start the FE server unless you're making changes to the FE application

Once started, navigate to `http://localhost:3004/server` and view-source to see the compiled code
All other routes render client side, so will not return the full page markup

# Start the server

```js
  npm run serve
```

# Start the front end

```js
  npm run start
```

# Build the front end

```js
  npm run build
```
