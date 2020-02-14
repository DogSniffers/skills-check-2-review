require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const ctrl = require("./controller.js");
const massive = require("massive");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/transactions", ctrl.getTransaction);
app.post("/api/transactions", ctrl.addTransaction);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("|--database connected--|");
  app.listen(SERVER_PORT, () =>
    console.log(`|---SERVER ON ${SERVER_PORT}---|`)
  );
});
