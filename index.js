const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

let notes = [];

app.get("/notes", (req, res) => {
  res.json(notes);
});
app.post("/note", (req, res) => {
  let note = req.body;
  notes.push({ ...note, id: v4() });
  res.json(notes);
});
app.delete("/note/:id", (req, res) => {
  let { id } = req.params;
  notes = notes.filter((note) => note.id != id);
  res.json(notes);
});

app.listen(8080, () => {
  console.log("Notes app started on port 8080");
});
