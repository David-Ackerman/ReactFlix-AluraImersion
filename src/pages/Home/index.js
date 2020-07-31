import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';



function Home() {
    return (
        <PageDefault>
            <div style={{ background: "#141414" }}>

                <BannerMain
                    videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                    url={dadosIniciais.categorias[0].videos[0].url}
                    videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina dos desenvolvedores. Mas o que eles fazem afinal? Decubra com a Vanessa!"}
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
                />
            </div>
        </PageDefault>
    );
}

export default Home;