const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, (error) => {
  if (!error) console.log(`Server is Successfully Running on${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
