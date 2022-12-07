"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언시 매개변수로 "DB명, 사용자, 비밀번호, 상세정보 전체" 정보를 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {"sequelize" : sequelize, "Sequelize" : Sequelize}

db.Todo = require('/Todo')(sequelize, Sequelize);

module.exports = db;
// db 객체를 내보냄