const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require('./routes/contacts.js')
const vehiclesRouter = require('./routes/vehicles.js')
const productsRouter = require('./routes/products.js')
const commentsRouter = require('./routes/comments.js')
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(contactsRouter, vehiclesRouter, productsRouter, commentsRouter)


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
