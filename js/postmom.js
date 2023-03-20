'use strict'

export const pesquisarCep = async(cepDesejado) =>{
    const url = `https://api.postmon.com.br/v1/cep/${cepDesejado}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.cidade,
        estado: data.estado
    }
}