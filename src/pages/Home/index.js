import React, { useEffect, useState} from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias.js';



function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        categoriasRepository.getAllWithVideos()
            .then((categoriasComVideos) =>{
                setDadosIniciais(categoriasComVideos);
            })
            .catch((err) =>{
                console.log(err.message);
            });
        
    }, []);

    return (
        <PageDefault>
            {dadosIniciais.length === 0 && (<div>Loading...</div>)} 
            
            {dadosIniciais.map((categoria, indice) => {
                console.log(dadosIniciais);
                if (indice === 0){
                    return (
                        <div key={categoria.id}>
                        <BannerMain
                            videoTitle={dadosIniciais[2].videos[0].titulo}
                            url={dadosIniciais[2].videos[0].url}
                            videoDescription={"O FINAL FANTASY VII REMAKE é uma nova versão do marcante jogo original com personagens inesquecíveis, um enredo surpreendente e batalhas épicas. A história deste primeiro jogo independente do projeto FINAL FANTASY VII REMAKE cobre a fuga do grupo de Midgar e aprofunda mais os eventos ocorridos na cidade em relação ao FINAL FANTASY VII original."}
                        />
                        <Carousel
                            category={dadosIniciais[0]}
                        />
                        </div>
                    );
                }
                return(
                    <Carousel
                        key={categoria.id}
                        category={categoria}
                    />
                );
            })}
        </PageDefault>
    );
}

export default Home;