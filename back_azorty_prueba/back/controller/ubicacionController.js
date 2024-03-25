import ubigeos_validos from'../model/Ubicacion.js';
import { Op } from 'sequelize';
async function buscarUbicacion(req, res) {
  const { distrito, provincia, departamen } = req.query;
  try {
    const ubicaciones = await ubigeos_validos.findAll({
        where: {
          distrito: {
            [Op.iLike]: `%${distrito}%`,
          },
          provincia: {
            [Op.iLike]: `%${provincia}%`,
          },
          departamen: {
            [Op.iLike]: `%${departamen}%`,
          }
        },
      });
      if(!ubicaciones){
        throw error("No existe esta ubicacion")
      }
    res.status(200).json(ubicaciones);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
}

export default buscarUbicacion;
