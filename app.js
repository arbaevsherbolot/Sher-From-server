require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const routerHandler = require("./routes/handler");

app.use(cors());
app.use("/", routerHandler);
app.use(express.json());

const PORT = process.env.PORT || 2006;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}.`));
