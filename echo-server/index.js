const app = require("express")();

const { SERVER_NAME, PORT } = process.env;

app.use('/', (req, res) => {
  console.log(req.headers)
  res.send(SERVER_NAME);
});

app.listen(PORT, ()=>{
  console.log(`(${SERVER_NAME}) Listening on port ${PORT}`)
});
