const Boulder = require('../models/boulderModel');

const getAll = (req, res) => {
    Boulder.find({ userId: req.params.userId }, (err, boulders) => {
        return err ? res.send(err) : res.json(boulders);
    });
};

const getOne = (req, res) => {
    Boulder.findById(req.params.boulderId, (err, boulder) => {
        return err ? res.send(err) : res.json(boulder);
    })
};

const create = (req, res) => {
    const boulder = new Boulder(req.body);

    boulder.save();
    return res.status(201).json(boulder);
};

const deleteAll = (req, res) => { };

const deleteOne = (req, res) => { };

const update = (req, res) => { };

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    deleteAll: deleteAll,
    deleteOne: deleteOne,
    update: update
};