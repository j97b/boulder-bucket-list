const noteController = (Note) => {
  const post = (req, res) => {
    const note = new Note(req.body);
    note.dave((err) => {
      if (err) {
        res.status(400);
        return res.json(err);
      } else {
        res.status(201);
        return res.json({ message: "New note saved successfully" });
      }
    });
  };

  const getAllByBoulderId = () => {};

  const deleteAllByBoulderId = () => {};

  const getOne = () => {};

  const deleteOne = () => {};

  const update = () => {};

  return {
    post,
    getAllByBoulderId,
    deleteAllByBoulderId,
    getOne,
    deleteOne,
    update,
  };
};

module.exports = noteController;
