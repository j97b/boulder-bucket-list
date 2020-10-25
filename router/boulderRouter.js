const { response } = require('express');
const express = require('express');

const boulderController = require('../controllers/boulderController');
const boulderMiddleware = require('../middleware/boulderMiddleware');

const routes = (Boulder) => {
    const router = express.Router();
    const controller = boulderController(Boulder);
    const middleware = boulderMiddleware(Boulder);

    router.route('/')
        .get(controller.getAll)
        .post(controller.post);

    router.use('/userId/:userId', middleware.findBouldersByUserId);
    
    router.route('/userId/:userId')
        .get(controller.getAllByUserId)
        .delete(controller.deleteAllByUserId);

    router.use('/boulderId/:boulderId', middleware.findBoulderById);

    router.route('/boulderId/:boulderId')
        .get(controller.getOne)
        .delete(controller.deleteOne)
        .patch(controller.update);
    
    return router;
}

module.exports = routes;