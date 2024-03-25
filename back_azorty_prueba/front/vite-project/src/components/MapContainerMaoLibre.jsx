import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { MaplibreExportControl, Size, PageOrientation, Format, DPI } from '@watergis/maplibre-gl-export';
import logo from "../assets/logoReport.png"
import tecImg from "../assets/tec.png"
import img2prueba from "../assets/img2prueba.png";
const LONG = -77.05898;
const LAT = -12.03165;
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json';

export default function MapContainerMaoLibre() {
  const mapContainer = useRef(null);
  const contentContainer = useRef(null); // Referencia al contenedor del contenido adicional
  const [map, setMap] = useState(null);
  const [exportControl, setExportControl] = useState(null);

  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: [LONG, LAT],
      zoom: 12,
      hash: true
    });

    mapInstance.on('load', () => {
      setMap(mapInstance);
      initExportControl(mapInstance);
    });
    

    return () => mapInstance.remove();
  }, []);

  const initExportControl = (mapInstance) => {
    const newExportControl = new MaplibreExportControl({
      PageSize: Size.A3,
      PageOrientation: PageOrientation.Portrait,
      Format: Format.PNG,
      DPI: DPI[96],
      Crosshair: true,
      PrintableArea: true,
      Local: true
    });
    setExportControl(newExportControl);
    mapInstance.addControl(newExportControl, 'top-right');

    // Verificar si el control de imprimir se ha agregado al mapa
    const isExportControlAdded = mapInstance.hasControl(newExportControl);
    console.log('¿El control de imprimir se ha agregado al mapa?', isExportControlAdded);
  };
  

  return (
    <div > {/* Contenedor principal */}
      {/* Contenedor del contenido adicional */}
      <div ref={contentContainer} style={{ position: 'absolute', right: '1px', top: 0}}>
        <div className='container-form'>
            <img 
            src={logo} alt='logo'
            style={{position: 'relative', borderRadius: 2,borderColor: 'black', width: '100%', height: '48px', fontSize: 'medium'}}
            />
              <div className=' font-bold  text-xs border-t-transparent border-2 text-center border-black w-full h-300px'>
                <div className='my-2 uppercase'>
                  <h1>Gerencia de Ventas</h1>
                  <h2 className='mt-1'>Territorios y estrategia comercial</h2>
                  <img className='relative left-20' src={tecImg} alt="tec" />
                  <label>campaña: {"202404"}</label>
                  <p className='mt-2'>Romina daniela noriega purizaga</p>
                </div>
                <div className='flex flex-col gap-1 relative text-start my-1 left-5'>
                  <label>REGION: {'ejemplo'}</label>
                  <label>ZONA: {'ejemplo'}</label>
                  <label>SECTOR: {'ejemplo'}</label>
                  <label>DEP: {'ejemplo'}</label>
                  <label>PROV: {'ejemplo'}</label>
                  <label>DIST: {'ejemplo'}</label>
                </div>
                <div  className='border-t-2 my-3 text-center border-black w-full h-300px'>
                  <h1>LEYENDA</h1>
                  <h2 className='text-start left-2 relative'>STATUS</h2>
                  <ul className='flex flex-wrap-reverse gap-2 list-inside list-disc ml-6'>
                    <li>{'ejemplo'}</li>
                    <li>{'ejemplo'}</li>
                    <li>{'ejemplo'}</li>
                    <li>{'ejemplo'}</li>
                    <li>{'ejemplo'}</li>
                    <li>{'ejemplo'}</li>
                  </ul>
                </div>
              </div>
              <h1 className=' my-2 uppercase font-bold text-xs text-center'>Ubicacion de la Zona y sector</h1>
              <div className='border-black border-2 w-full h-auto text-md relative'>
                <img className='w-full' src={img2prueba} alt="img 2" />
              <button onClick={()=>Window.print()}>Descargar PDF</button>
              </div>
        </div>
      </div>
      {/* Contenedor del mapa */}
      <div style={{ flex: 1 }}>
        <div ref={mapContainer} style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', zIndex: 1 }} />
      </div>
    </div>
  );
}
