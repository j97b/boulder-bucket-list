const express = require("express");
const noteController = require("../controllers/noteController");
const noteMiddleware = require("../middleware/noteMiddleware");

const routes = (Note) => {
  const router = express.Router();
  const controller = noteController(Note);
  const middleware = noteMiddleware(Note);

  router.route("/").post(controller.post);

  router.use("/boulderId/:boulderId", middleware.findNotesByBoulderId);

  router
    .route("/boulderId/:boulderId")
    .get(controller.getAllByBoulderId)
    .delete(controller.deleteAllByBoulderId);

  router
    .use("/noteId/:noteId", middleware.findNoteById)
    .delete(controller.deleteOne)
    .patch(controller.update);

  return router;
};

module.exports = routes;
