const executeQuery = require('../database/query');
const Evento = {
    getEvento: async () => {
        return await executeQuery(
            `SELECT eventos.id, eventos.valor, eventos.ambiente_id, eventos.data, ambiente.nome AS 'Ambiente' FROM eventos LEFT JOIN ambiente ON eventos.ambiente_id = ambiente.id`)
            .catch(error => { throw error })
    },
    insertEvento: async (valor, ambiente_id, data) => {
        return await executeQuery(
            `INSERT INTO eventos(valor, ambiente_id, data) VALUES (?,?,?)`,[valor,ambiente_id, data]
        )
        .catch(error => { throw error })
    }
    
}
module.exports = Evento