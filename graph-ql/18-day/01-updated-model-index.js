const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.students = require("./student.model.js")(sequelize, Sequelize);
db.teachers = require("./teacher.model.js")(sequelize, Sequelize);
db.subjects = require("./subject.model.js")(sequelize, Sequelize);

const Student_Has_Subject = sequelize.define('student_has_subject', {});
db.subjects.belongsToMany(db.students, { 
    through: Student_Has_Subject,
    as: "subjects",
    foreignKey: 'subjectId' });

db.students.belongsToMany(db.subjects, { 
  through: Student_Has_Subject,
  as: "students", 
  foreignKey: 'studentId' });

const TeacherHasSubject = sequelize.define('teacher_has_subject', {});
db.subjects.belongsToMany(db.teachers, { 
  through: TeacherHasSubject, 
  as: "teachers",
  foreignKey: 'subjectId' });

db.teachers.belongsToMany(db.subjects, { 
  through: TeacherHasSubject,
  as: "subjects", 
  foreignKey: 'teacherId' });

db.teachers.addSubject = TeacherHasSubject.belongsTo(db.teachers);

db.sessions = require("./session.model.js")(sequelize, Sequelize);

db.subjects.hasMany(db.sessions, { foreignKey: 'subjectId' });
db.teachers.hasMany(db.sessions, { foreignKey: 'teacherId' });

module.exports = db;

