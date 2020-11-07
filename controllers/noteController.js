const noteController = (Note) => {
  const post = (req, res) => {
    const note = new Note(req.body);
    note.save((err) => {
      if (err) {
        res.status(400);
        return res.json(err);
      } else {
        res.status(201);
        return res.json({ message: "New note saved successfully" });
      }
    });
  };

  const getAllByBoulderId = (req, res) => {
    res.json(req.notes);
  };

  const deleteAllByBoulderId = (req, res) => {
    for (note of req.notes) {
      note.remove((err) => {
        if (err) {
          return res.send(err);
        }
      });
    }
    res.status(200);
    return res.send(`Deleted ${req.notes.length} notes`);
  };

  const deleteOne = (req, res) => {
    req.note.remove((err) => {
      if (err) {
        return res.send(err);
      } else {
        res.status(200);
        return res.send("Deleted note successfully");
      }
    });
  };

  const update = (req, res) => {
    const { note } = req;
    Object.entries(req.body).forEach((item) => {
      note[item[0]] = item[1];
    });
    req.note.updated = true;
    req.note.date = new Date();
    req.note.save((err) => {
      if (err) {
        return res.send(err);
      } else {
        res.status(200);
        return res.send("Note updated succesfully");
      }
    });
  };

  return {
    post,
    getAllByBoulderId,
    deleteAllByBoulderId,
    deleteOne,
    update,
  };
};

module.exports = noteController;
