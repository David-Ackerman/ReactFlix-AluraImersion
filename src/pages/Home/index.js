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
                if (indice === 0){
                    return (
                        <div key={categoria.id}>
                        <BannerMain
                            videoTitle={dadosIniciais[0].videos[0].titulo}
                            url={dadosIniciais[0].videos[0].url}
                            videoDescription={"O FINAL FANTASY VII REMAKE é uma nova versão do marcante jogo original com personagens inesquecíveis, um enredo surpreendente e batalhas épicas. A história deste primeiro jogo independente do projeto FINAL FANTASY VII REMAKE cobre a fuga do grupo de Midgar e aprofunda mais os eventos ocorridos na cidade em relação ao FINAL FANTASY VII original."}
                        />
                        <Carousel
                            ignoreFirstVideo
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
                
            

                {/*<BannerMain
                    videoTitle={dadosIniciais.categorias[4].videos[0].titulo}
                    url={dadosIniciais.categorias[4].videos[0].url}
                    videoDescription={"O FINAL FANTASY VII REMAKE é uma nova versão do marcante jogo original com personagens inesquecíveis, um enredo surpreendente e batalhas épicas. A história deste primeiro jogo independente do projeto FINAL FANTASY VII REMAKE cobre a fuga do grupo de Midgar e aprofunda mais os eventos ocorridos na cidade em relação ao FINAL FANTASY VII original."}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[0]}
                />
                <Carousel
                    category={dadosIniciais.categorias[1]}
                />
                <Carousel
                    category={dadosIniciais.categorias[2]}
                />
                <Carousel
                    category={dadosIniciais.categorias[3]}
                />
                <Carousel
                    category={dadosIniciais.categorias[4]}
                />
                <Carousel
                    category={dadosIniciais.categorias[5]}
                />*/}
            
        </PageDefault>
    );
}

export default Home;