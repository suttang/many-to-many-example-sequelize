const Sequelize = require('sequelize')
const { sequelize } = require('./')

const Previlledge = sequelize.define('previlledge', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'previlledge',
  timestamps: false
})

Previlledge.associate = () => {
  const User = require('./user')
  const UserPrevilledge = require('./user-previlledge')
  Previlledge.belongsToMany(User, { through: UserPrevilledge, foreignKey: 'previlledge_id' })
}

module.exports = Previlledge
