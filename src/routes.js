
const router = require('express').Router();
const subscriptionController = require('./controller/Subscription');

router.get('/', (req,res)=>{
    res.json({ message: 'Service working...'})
})
router.post('/newslatter', subscriptionController.subscribe);
router.get('/users', subscriptionController.findAll);

module.exports = router;