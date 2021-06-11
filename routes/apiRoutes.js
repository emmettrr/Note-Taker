const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

modules.export = (app) => {
  app.get("/api/notes", (res, req) => {
    res.json(data);
  });
  app.get("/api/notes/:id", (res,req) => {
      res.json(data[Number(req.params.id)])
  })

  
};
