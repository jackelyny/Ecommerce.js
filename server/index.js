const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const cache = require("./caches");
const PORT = process.env.PORT || 3001;

const cacheTime = 15;

const db = mysql.createPool({
  host: "[host]",
  user: "[user]",
  password: "[password]",
  database: "[database]",
});

app.use(cors());
app.use(express.json());

app.get("/products", cache(1500), (req, res) => {
  db.query("SELECT * FROM Products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", cache(1500), (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO Employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", cache(1500), (req, res) => {
  db.query("SELECT * FROM Employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", cache(1500), (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE Employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`[SERVER]: Running on port ${PORT}`);
});
