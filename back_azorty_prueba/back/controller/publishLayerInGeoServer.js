import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

const publishLayerInGeoServer = async (req, res) => {
  const { layerName } = req.body;
  console.log(layerName);
  const workspace = process.env.WORK_SPACE;
  const dataStoreName = process.env.DATA_STORE_NAME;
  const nativeName = layerName;

  const geoserverUrl = 'http://192.168.18.76:8080/geoserver';
  const restUrl = `${geoserverUrl}/rest/workspaces/${workspace}/datastores/${dataStoreName}/featuretypes`;

  const xmlData = `
    <featureType>
      <name>${layerName}</name>
      <nativeName>${nativeName}</nativeName>
      <srs>EPSG:4326</srs>
    </featureType>
  `;

  try {
    const response = await axios.post(restUrl, xmlData, {
      auth: {
        username: 'admin',
        password: 'geoserver',
      },
      headers: {
        'Content-Type': 'application/xml',
      },
    });
    res.send(`Capa "${layerName}" publicada en GeoServer.`)
    console.log(response.data);
  } catch (error) {
    console.error('Error al publicar la capa en GeoServer:', error.response ? error.response.data : error.message);
  }
};

export default publishLayerInGeoServer;
