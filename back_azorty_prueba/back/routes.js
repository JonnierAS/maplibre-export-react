import { Router } from 'express';
import  buscarUbicacion  from './controller/ubicacionController.js';
import publicsStyleGeoserver from './controller/publishStyleGeoserver.js';
import updateStyleGeoServer from './controller/updateStyleGeoserver.js';
import publishLayerInGeoServer from './controller/publishLayerInGeoServer.js';

const router = Router();

router.get('/buscarUbicacion', buscarUbicacion);
router.post("/publish_style", publicsStyleGeoserver)
router.put("/update_style", updateStyleGeoServer)
router.post("/publishNewLayer", publishLayerInGeoServer)
export default router;
