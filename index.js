const {
  User,
  Previlledge
} = require('./models')

async function main() {
  const previlledges = await Previlledge.findAll()

  const user = await User.create({
    account: 'sequelize',
    firstName: 'Takashi',
    lastName: 'Sato'
  })

  await user.addPrevilledges(previlledges)
}

main()
