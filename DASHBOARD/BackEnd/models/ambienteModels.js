const executeQuery = require('../database/query');

const Ambiente = {
    getAmbiente: async () => {
        return await executeQuery(`SELECT id, nome, tipo FROM ambiente`)
            .catch(error => { throw error })
    },
}
module.exports = Ambiente