const ambienteModels = require('../models/ambienteModels')

const ambientController = {
    getAmbient: async (req, res) => {
        try {
            const resultado = await ambienteModels.getAmbiente();
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
    }
}
module.exports = ambientController;