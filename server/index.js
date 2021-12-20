const express = require("express");
const cors = require("cors");
const videos = require("./routes/videos");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/videos", videos);

app.listen(8080, () => {
  console.log(`🚀 Server listening on ${8080}`);
});
