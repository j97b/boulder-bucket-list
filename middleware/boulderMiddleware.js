const boulderMiddleware = (Boulder) => {
    const findBouldersByUserId = (req, res, next) => {
        Boulder.find({ userId: req.params.userId }, (err, boulders) => {
            if (err) {
                return res.send(err);
            }
            if (boulders) {
                req.boulders = boulders;
                return next();
            }
            return res.sendStatus(404);
        });
    };

    const findBoulderById = (req, res, next) => {
        Boulder.findById(req.params.boulderId, (err, boulder) => {
            if (err) {
                return res.send(err);
            }
            if (boulder) {
                req.boulder = boulder;
                return next();
            }
            return res.sendStatus(404);
        })
    }

    return { findBouldersByUserId, findBoulderById };
};

module.exports = boulderMiddleware;