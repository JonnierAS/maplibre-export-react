import { createBrowserRouter } from "react-router-dom";
import MapContainerLeaflet from "./components/MapContainerLeaflet";
import MapContainerMaoLibre from "./components/MapContainerMaoLibre";

const router = createBrowserRouter([
  {
    path: '/mapLealet',
    element: <MapContainerLeaflet />
  },
  {
    path: '/mapLibre',
    element: <MapContainerMaoLibre />
  },
 
])
export default router
