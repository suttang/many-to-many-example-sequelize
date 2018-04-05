const Sequelize = require('sequelize')
const { sequelize } = require('./')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'user',
  timestamps: false
})

User.associate = () => {
  const Previlledge = require('./previlledge')
  const UserPrevilledge = require('./user-previlledge')
  User.belongsToMany(Previlledge, { through: UserPrevilledge, foreignKey: 'user_id' })
}

module.exports = User
