const express = require('express');
const { globalRouter } = require('./routes/global.routes');
const port = 3001;
const app = express();
app.use(express.json());

app.use("/",globalRouter);
app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
})