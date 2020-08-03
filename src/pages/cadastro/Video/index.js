import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../../../components/DivContainer';

function CadastroVideo() {
    return (
        <PageDefault>
            <DivContainer>
                <h1>Pagina de cadastro de video</h1>

                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>
            </DivContainer>
        </PageDefault>
    );
}

export default CadastroVideo;
