const noteMiddleware = (Note) => {
  const findNotesByBoulderId = (req, res, next) => {
    Note.find({ boulderId: req.params.boulderId }, (err, notes) => {
      if (err) {
        return res.send(err);
      }
      if (notes) {
        req.notes = notes;
        return next();
      }
      return res.sendStatus(404);
    });
  };

  const findNoteById = (req, res, next) => {
    Note.findById(req.params.noteId, (err, note) => {
      if (err) {
        return res.send(err);
      }
      if (note) {
        req.note = note;
        return next();
      }
      return res.sendStatus(404);
    });
  };

  return { findNotesByBoulderId, findNoteById };
};

module.exports = noteMiddleware;
