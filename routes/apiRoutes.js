const fs = require("fs");
const data = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));

modules.export = (app) => {
  app.get("/api/notes", (res, req) => {
    res.json(data);
  });
  app.get("/api/notes/:id", (res, req) => {
    res.json(data[Number(req.params.id)]);
  });

  app.post("/api/notes", (res, req) => {
    let note = req.body;
    let uniqueID = data.length;
    console.log(uniqueID);
    note.id = uniqueID;
    data.push(note)

    fs.writeFileSync("../db/db.json", JSON.stringify(data), (err) => {
        if (err) console.log(err) 
    })

    res.json(data)
  });







};
