var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/api/products');

/* --------Product routes--------------- */
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);

/*---------- Protected Routes ----------*/
router.delete('/:id', /*checkAuth,*/ productsCtrl.delete);
router.put('/:id', /*checkAuth,*/ productsCtrl.update);

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}