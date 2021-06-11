const userController = require("../Controlles/userControl.js");

module.exports = (app) => {
  app.post("/user", userController.post);
  app.put("/user/:id", userController.put);
  app.delete("/user/:id", userController.delete);
  app.get("/users", userController.get);
  app.get("/user/:id", userController.getById);
};
