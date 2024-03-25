import express, { json, urlencoded } from 'express';
import routes from './routes.js';
import ubigeos_validos from'./model/Ubicacion.js';
import Shapefile from './model/Shapefile.js';
import cors from "cors"
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(cors());

app.use('/api', routes);

Promise.all([ubigeos_validos.sync({ force: false }), Shapefile.sync({ force: false })])
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
