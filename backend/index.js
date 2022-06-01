const  express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
server.use(express.json());

const PORT = process.env.PORT || 9999;

server.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});
