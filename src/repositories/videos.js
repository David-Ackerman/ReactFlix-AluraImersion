
const URL = 'http://localhost:8080/videos';

function create(objetoDoVideo){
    return fetch(`${URL}?_embed=videos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok){
                const resposta = await respostaDoServer.json();         
                return resposta;
            }
        })
}

export default {
    create,
};