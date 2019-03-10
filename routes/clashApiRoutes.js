var express = require('express');
var router = express.Router();
const verifyToken = require('../modulos/check-auth');
const { ensureApiAuthenticated } = require('../config/authApi');

var clashController = require('../controllers/clashController');


router.post('/clash/createmethod', verifyToken, clashController.clashroyale_createMethod_post);
router.put('/clash/:id', verifyToken,  clashController.clashroyale_update_post);
router.delete('/clash/:id', verifyToken, clashController.clashroyale_delete_post);
router.get('/clashsAllapi', verifyToken, clashController.getClashRoyaleList );

router.get('/clashs', verifyToken, clashController.getClashRoyaleListOwner );
router.get('/clash/:id', verifyToken, clashController.clashroyale_detail);


router.get('/clashs/:orderby', verifyToken,  clashController.clashroyale_OrderBy);

router.get('/clashroyaleapi', verifyToken , clashController.clashroyaleapi);

router.get('/clashsAll', verifyToken, clashController.getClashRoyaleList );

router.get('/ClashRoyaleClickAndGetPrint', clashController.ClashRoyaleClickAndGetPrint);

module.exports = router;

