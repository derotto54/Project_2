const User = require('./User');
const Category = require('./Category');
const Hobby = require('./Hobby');
const UserHobby = require('./UserHobby')
const UserLike = require('./UserLike')

Hobby.belongsTo(Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Hobby, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

User.belongsToMany(Hobby, { through: UserHobby })
Hobby.belongsToMany(User, { through: UserHobby })

User.belongsToMany(User,{ through: UserLike, as:'likes'})

module.exports = { User, Category, Hobby, UserHobby, UserLike };


