const User = require('./models/user');
const Course = require('./models/course');
const UserCourse = require('./models/usercourse');
const Assignment = require('./models/assignment');
const { sequelize } = require('./sequelize');

module.exports = async () => {
    User.hasMany(UserCourse, { constraints: true, onDelete: 'CASCADE', foreignKey: 'userId' });
    UserCourse.belongsTo(User, { constraints: false });
    Course.hasMany(UserCourse, { constraints: true, onDelete: 'CASCADE', foreignKey: 'courseId' });
    UserCourse.belongsTo(Course, { constraints: false });

    await sequelize.sync({ alter: true });
};