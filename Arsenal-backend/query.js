const { Player, sequelize } = require('./models')
const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
  }

  const getPlayers = async () => {
      try {
        const data = await Player.findAll()
        stringify(data)

      } catch (error) {
          throw(error)
      }
  }

  async function main() {
      try {
          await getPlayers()
      } catch (error) {
            throw(error)
      } finally {
          sequelize.close()
      }
  }

  main()