const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const uploadRoute = require('#routes/main');
const keycloak = require('./middleware/keyacloak')

const port = process.env.PORT;

//getting identity server configs
const server = process.env.KEYCLOAK_URL;

const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
}

// Register routes
app.use(keycloak.middleware());
app.use('/api/v1', uploadRoute);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Server is running on port '+ port );
    console.log('identity server at '+ server)
})
