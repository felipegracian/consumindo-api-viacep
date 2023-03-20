'use strict'


export const pesquisarCep = async (cepDoUser) =>{
    const url = `https://brasilapi.com.br/api/cep/v1/${cepDoUser}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municipio: data.city,
        estado: data.state
    }
}