import { DataTypes } from'sequelize';
import sequelize from'../Sequalize.js';

const ubigeos_validos = sequelize.define('ubigeos_validos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  geom: {
    type: DataTypes.GEOMETRY('GEOMETRY', 4326), 
  },
  ubigeo: DataTypes.STRING,
  distrito: DataTypes.STRING,
  provincia: DataTypes.STRING,
  departamen: DataTypes.STRING,
  poblacion: DataTypes.STRING,
  superficie: DataTypes.FLOAT,
},{
  timestamps: false
});

export default ubigeos_validos;
