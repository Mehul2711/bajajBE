const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use("/bfhl", apiRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
