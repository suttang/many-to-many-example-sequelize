const Sequelize = require('sequelize')

const config = require('../config/database')

const sequelize = new Sequelize(config)

module.exports = {
  sequelize
}

const User = require('./user')
const Previlledge = require('./previlledge')
const UserPrevilledge = require('./user-previlledge')

User.associate()
Previlledge.associate()

module.exports.User = User
module.exports.Previlledge = Previlledge
module.exports.UserPrevilledge = UserPrevilledge
