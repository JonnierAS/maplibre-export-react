import {Sequelize} from 'sequelize';
const sequelize = new Sequelize('Azorty', 'postgres', '27652167', {
  host: 'localhost',
  dialect: 'postgres',
  port:5432,
  logging: false,
});

export default sequelize;
