import Application from './Application.js';
import Department from './Department.js';
import Project from './Project.js';
import User from './User.js';

export default () => {
  /** User-Department */
  User.belongsTo(Department, { foreignKey: 'departmentId' });
  Department.hasMany(User, { foreignKey: 'departmentId' });

  /** Application-Project */
  Application.belongsTo(Project, { foreignKey: 'projectId' });
  Project.hasMany(Application, { foreignKey: 'projectId' });

  /** Academician-Application */
  Application.belongsTo(User, { foreignKey: 'academicianId', as: 'Academician' });
  User.hasMany(Application, { foreignKey: 'academicianId' });

  /** Student-Application */
  Application.belongsTo(User, { foreignKey: 'studentId', as: 'Student' });
  User.hasMany(Application, { foreignKey: 'studentId' });
};
