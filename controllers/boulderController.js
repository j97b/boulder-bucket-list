const boulderController = (Boulder) => {
  const getAll = (req, res) => {
    Boulder.find((err, boulders) => {
      return err ? res.send(err) : res.json(boulders);
    });
  };

  const getAllByUserId = (req, res) => res.json(req.boulders);

  const getOne = (req, res) => res.json(req.boulder);

  const deleteAllByUserId = (req, res) => {
    for (boulder of req.boulders) {
      boulder.remove((err) => {
        if (err) {
          return res.send(err);
        }
      });
    }
    res.status(200);
    return res.send(`Deleted ${req.boulders.length} boulders`);
  };

  const deleteOne = (req, res) => {
    req.boulder.remove((err) => {
      return err ? res.send(err) : res.sendStatus(204);
    });
  };

  const post = (req, res) => {
    const boulder = new Boulder(req.body);
    boulder.save((err) => {
      if (err) {
        res.status(400);
        return res.json(err);
      } else {
        res.status(201);
        return res.json({ message: `${boulder.name} saved successfully` });
      }
    });
  };

  const update = (req, res) => {
    const { boulder } = req;
    Object.entries(req.body).forEach((item) => {
      boulder[item[0]] = item[1];
    });
    req.boulder.save((err) => {
      return err ? res.send(err) : res.json(boulder);
    });
  };

  return {
    getAll,
    getAllByUserId,
    getOne,
    deleteAllByUserId,
    deleteOne,
    post,
    update,
  };
};

module.exports = boulderController;
