const eventosModels = require('../models/eventosModels')

const eventController = {
    getEvent: async (req, res) => {
        try {
            const resultado = await eventosModels.getEvento();
            if(resultado.length > 0){
                console.log(resultado)
                res.status(200).json(resultado)
            }
            else{
                res.status(404).json({code: code.QUERY_ERROR})
            }
        }
        catch (erro) {
            res.status(404).json({code: code.SERVER_ERROR})
        }
    },
    insertEvent: async (req, res) => {
        const {valor, ambiente_id, data} = req.body

        try{
            const sql = await eventosModels.insertEvento(valor, ambiente_id, data)
            
            if (sql.affectedRows > 0) {
                res.status(201).json({ msg: "Evento registrado com sucesso" })
            }
            else {
                res.status(404).json({ code: code.QUERY_ERROR })
            }
        } catch {

        }
    }
}
module.exports = eventController;