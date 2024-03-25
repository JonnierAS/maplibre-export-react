
import axios from "axios"

const updateStyleGeoServer = async (req, res) => {
  const {layerName, newStyle} = req.body
  const geoserverUrl = 'http://192.168.18.76:8080/geoserver';

  const layerUrl = `${geoserverUrl}/rest/layers/${layerName}`;

  const { data: layerInfo } = await axios.get(layerUrl, {
    auth: {
      username: 'admin',
      password: 'geoserver',
    },
  });

  layerInfo.layer.defaultStyle.name = newStyle;

  await axios.put(layerUrl, layerInfo, {
    auth: {
      username: 'admin',
      password: 'geoserver',
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  res.send(`Estilo de la capa ${layerName} actualizado a ${newStyle}`);
};

export default updateStyleGeoServer;