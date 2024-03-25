import { DataTypes } from "sequelize";
import sequelize from'../Sequalize.js';

const Shapefile = sequelize.define("Shapefile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    geom:{
        type: DataTypes.GEOMETRY
    },
    ubigeo: {
        type: DataTypes.STRING(6)
    },
    distrito: {
        type: DataTypes.STRING(100)
    },
    provincia: {
        type: DataTypes.STRING(250)
    },
    departamen: {
        type: DataTypes.STRING(250)
    },
    poblacion: {
        type: DataTypes.STRING(50)
    },
    superficie: {
        type: DataTypes.FLOAT
    }
  },{
    timestamps: false
  });


export default Shapefile