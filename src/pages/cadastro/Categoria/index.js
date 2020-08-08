import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../../../components/DivContainer';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm.js';


function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const initialValues = {
        titulo: '',
        descricao: '',
        cor: '',
    };

    const { funcaoSet, values, clearForm} = useForm(initialValues);

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias'; 
            fetch(URL)
             .then(async (respostaDoServer) =>{
                if(respostaDoServer.ok) {
                    const resposta = await respostaDoServer.json();
                    setCategorias(resposta);
                    return; 
                }
              throw new Error('Não foi possível pegar os dados');
            })
        } 
    }, []);

    return (
        <PageDefault>
            <DivContainer>
                <h1>
                    Cdastro de Categoria:{' '}
                    {values.titulo}
                </h1>

                <form onSubmit={function handleSubmit(infosEventos) {
                    infosEventos.preventDefault();
                    setCategorias([
                        ...categorias,
                        values,
                    ]);
                    clearForm();
                }}>
                    <FormField
                        label="Titulo da Categoria:"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={funcaoSet}
                    />
                    <FormField
                        label="Descrição:"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={funcaoSet}
                    />
                    <FormField label="Cor: " name="cor" type="color" value={values.cor} onChange={funcaoSet} />
                    <Button>
                        Cadastrar
                    </Button>
                </form>
                {categorias.lenght === 0 && (
                    <div>
                        Loading...
                    </div>
                )}
                <ul>
                    {categorias.map((categoria) => (
                        <li key={categoria.id}>
                            {categoria.titulo}
                        </li>
                    ))}
                </ul>
                <Link to="/">
                    ir para home
                </Link>
            </DivContainer>
        </PageDefault>
    );
}

export default CadastroCategoria;
