const router = require('express').Router();

const routes = require('./boulderRoutes');

router.get('/get/:userId', routes.getAll);
router.get('/getOne/:boulderId', routes.getOne);
router.post('/create', routes.create);
router.delete('/deleteAll', routes.deleteAll);
router.delete('/deleteOne', routes.deleteOne);
router.patch('/update', routes.update);

module.exports = router;
