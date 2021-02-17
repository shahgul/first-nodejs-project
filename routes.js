let router = require('express').Router();
//set default API response
router.get('/', function (req, res){
    res.json({
        status: 'API is working',
        message: 'Welcome'
    });
});

//export API routes
module.exports = router;