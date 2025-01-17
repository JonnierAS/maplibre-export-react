import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import './index.css'
import '@watergis/maplibre-gl-export/dist/maplibre-gl-export.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
