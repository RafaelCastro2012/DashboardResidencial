async function buscarClima() {
    let municipio = document.getElementById('cidade');
    let cidade = "";
    let estado = "";
    let latitude = "";
    let longitude = "";
    let temp = document.getElementById('temperatura');
    let cond = document.getElementById('condicao');
    let umid = document.getElementById('umidade');
    
    try {
        const cep = "24110360";
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/ `);
        let dadosRecebidos = await resposta.json();
        cidade = dadosRecebidos.localidade;
        estado = dadosRecebidos.uf;
        municipio.innerText = ` ${cidade}/${estado} `;
        console.log(dadosRecebidos)
    } catch (erro) {
        console.log(`Erro em buscar o cep: ${erro}`);
        return;
    }

    try {
        const key = "d2ade75bf4294582997761b7a638eb09";
        let retorno = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cidade},${estado}&key=${key}`);
        let retornoDados = await retorno.json();
        console.log(retornoDados.results[0].geometry)
        latitude = retornoDados.results[0].geometry.lat;
        longitude = retornoDados.results[0].geometry.lng;
    } catch (error) {
    console.log(`Erro ao buscar Geolocalização: ${erro}`)
    }

    try {
        const key = "1a233e99abd9c20fecb68b75beb70842";
        let LatLng = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${key}`);
        let retornoLatLng = await LatLng.json();
        console.log(retornoLatLng)
        const temperatura = retornoLatLng.main.temp;
        const umidade = retornoLatLng.main.humidity;
        const condicao = retornoLatLng.weather[0].description;

        temp.innerText = ` Temperatura: ${temperatura}° `;
        cond.innerText = ` Condição: ${condicao} `;
        umid.innerText = ` Umidade: ${umidade}% `;
    } catch (error) {
    console.log(`Erro ao buscar Latitude e Longitude: ${erro}`)
    }
}
buscarClima();