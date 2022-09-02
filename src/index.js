const { rastrearEncomendas } = require('correios-brasil');
const codigosJson = require('./codigos.json');

let codRastreio = [];

codigosJson.forEach(codigo => {
    codRastreio.push(codigo.codigo);
});

rastrearEncomendas(codRastreio)
    .then((encomendas) => {
        encomendas.forEach((encomenda, index) => {
            console.log('============================================================================================================================================================\n\n');
            console.log(codigosJson[index].itemNome);
            console.table(encomenda);
            if(index + 1 == encomendas.length){
                console.log('\n\n============================================================================================================================================================\n\n');
            }
        });
    })
    .catch((err) => {
        console.log(err);
    });