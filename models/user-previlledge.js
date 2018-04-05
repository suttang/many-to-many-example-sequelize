const Sequelize = require('sequelize')
const { sequelize } = require('./')

const UserPrevilledge = sequelize.define('userPrevilledge', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  previlledge_id: {
    type: Sequelize.INTEGER
  }
}, {
  tableName: 'user_previlledge',
  timestamps: false
})

module.exports = UserPrevilledge
