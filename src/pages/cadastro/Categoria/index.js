import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../div.js';


function CadastroCategoria() {
    return (
        <PageDefault>
            <DivContainer>
                <h1>Pagina de cadastro de Categoria</h1>

                <Link to="/">
                    ir para home
                </Link>
            </DivContainer>
        </PageDefault>
    );
}

export default CadastroCategoria;