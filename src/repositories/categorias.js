
const URL = 'http://localhost:8080/categorias';

function getAllWithVideos(){
    return fetch(`${URL}?_embed=videos`)
        .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok){
                const resposta = await respostaDoServer.json();         
                return resposta;
            }
        })
}

function getAll(){
    return fetch(URL)
        .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok){
                const resposta = await respostaDoServer.json();         
                return resposta;
            }
        })
}

export default {
    getAllWithVideos,
    getAll,
};