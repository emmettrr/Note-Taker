const path = require("path");

modules.export = (app) => {
  app.get("/", (res, req) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
  app.get("/notes", (res, req) => {
    res.sendFile(path.join(__dirname, "/../public/notes.html"));
  });
};
