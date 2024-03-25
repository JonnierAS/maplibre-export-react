import axios from "axios"
import { GeoServerRestClient, GeoServerResponseError } from "geoserver-node-client";




const publicsStyleGeoserver = async(req, res)=>{
    const{workspace, styleName} = req.body;
const sldBody = `<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
<NamedLayer>
    <Name>My Style</Name>
    <UserStyle>
        <Title>My Style</Title>
        <Abstract>A sample style</Abstract>
        <FeatureTypeStyle>
            <Rule>
                <PolygonSymbolizer>
                    <Fill>
                        <CssParameter name="fill">#cbcc33</CssParameter>
                    </Fill>
                    <Stroke>
                        <CssParameter name="stroke">#000000</CssParameter>
                        <CssParameter name="stroke-width">1</CssParameter>
                    </Stroke>
                </PolygonSymbolizer>
                <TextSymbolizer>
                    <Label>
                        <ogc:PropertyName>nombremanz</ogc:PropertyName>
                    </Label>
                    <Font>
                        <CssParameter name="font-family">Arial</CssParameter>
                        <CssParameter name="font-size">12</CssParameter>
                        <CssParameter name="font-style">normal</CssParameter>
                        <CssParameter name="font-weight">bold</CssParameter>
                    </Font>
                    <LabelPlacement>
                        <PointPlacement>
                            <AnchorPoint>
                                <AnchorPointX>0.0</AnchorPointX>
                                <AnchorPointY>0.5</AnchorPointY>
                            </AnchorPoint>
                        </PointPlacement>
                    </LabelPlacement>
                    <Fill>
                        <CssParameter name="fill">#000000</CssParameter>
                    </Fill>
                </TextSymbolizer>
            </Rule>
        </FeatureTypeStyle>
    </UserStyle>
</NamedLayer>
</StyledLayerDescriptor>`;

const url = 'http://192.168.18.76:8080/geoserver/rest/';
const user = 'admin';
const pw = 'geoserver';
const grc = new GeoServerRestClient(url, user, pw);
try {
  // Publicar el nuevo estilo
  await grc.styles.publish(workspace, styleName, sldBody);
  res.send("Publicacion Exitosa")
} catch (error) {
  console.error(error.message);
  console.error(error);

  if (error instanceof GeoServerResponseError) {
    // A GeoServer specific error happened
  } else {
    // Another error happened
  }
}
}

export default publicsStyleGeoserver