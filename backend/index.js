const  express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { Admin } = require("mongodb");

dotenv.config();
const server = express();
server.use(express.json());
const PORT = process.env.PORT || 9999;
const url = 'mongodb://admin:admin@mongo:27017/petshop-db?authSource=admin';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const productsSchema = new mongoose.Schema(
    {
        productName: String,
        productDescription: String,
        quantity: Number
    }, 
    { collection: 'Products' }
);
const Products = mongoose.model('Products', productsSchema);


server.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});

server.get('/products', (req, res) => {

    Products.find().then(result => res.send(result)).catch(err => console.log(err));

});
