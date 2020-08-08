import React, { useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../../../components/DivContainer';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm.js';
import videosRepository from '../../../repositories/videos.js';
import categoriasRepository from '../../../repositories/categorias.js';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState();
    const {funcaoSet, values } = useForm({
        titulo: 'videoPadrao',
        url: 'https://www.youtube.com/watch?v=sEE-3P9kKyE',
        categoria: 'Front End'
    });

    useEffect(() => {
        categoriasRepository.getAll().then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
        
    },[])
    return (
        <PageDefault>
            <DivContainer>
                <h1>Pagina de cadastro de video</h1>

                <form onSubmit={(event) =>{
                    event.preventDefault();
                    const categoriaEscolhida = categorias.find((categoria) => {
                        return categoria.titulo === values.categoria;
                    })
                    videosRepository.create({
                        titulo: values.create,
                        url: values.url,
                        categoriaId: categoriaEscolhida.id,
                    }).then(() => {
                        history.push('/');
                    });
                    
                }}>
                    <FormField
                        label="Titulo do video:"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={funcaoSet}
                    />
                    <FormField
                        label="Url:"
                        type="text"
                        name="url"
                        value={values.url}
                        onChange={funcaoSet}
                    />
                    <FormField
                        label="Categoria:"
                        type="text"
                        name="categoria"
                        value={values.categoria}
                        onChange={funcaoSet}
                    />
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>

                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>


            </DivContainer>
        </PageDefault>
    );
}

export default CadastroVideo;
