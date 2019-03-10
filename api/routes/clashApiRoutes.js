var express = require('express');
var router = express.Router();
var clashController = require('../controllers/clashController');
const checkAuth = require('../middleware/check-auth');


router.post('/clash/createmethod', checkAuth, clashController.clashroyale_createMethod_post);
router.put('/clash/:id', checkAuth,  clashController.clashroyale_update_post);
router.delete('/clash/:id', checkAuth, clashController.clashroyale_delete_post);
router.get('/clashsAllapi', checkAuth, clashController.getClashRoyaleList );

router.get('/clashs', checkAuth, clashController.getClashRoyaleListOwner );
router.get('/clash/:id', checkAuth, clashController.clashroyale_detail);


router.get('/clashs/:orderby', checkAuth,  clashController.clashroyale_OrderBy);

router.get('/clashroyaleapi', checkAuth , clashController.clashroyaleapi);

router.get('/clashsAll', checkAuth, clashController.getClashRoyaleList );

router.get('/ClashRoyaleClickAndGetPrint', clashController.ClashRoyaleClickAndGetPrint);

module.exports = router;

