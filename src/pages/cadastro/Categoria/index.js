import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../../../components/DivContainer';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const initialValues = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [values, setValues] = useState(initialValues);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }
    function funcaoSet(infoValue) {
        setValue(infoValue.target.getAttribute('name'), infoValue.target.value);
    }
    useEffect(() => {
        const Url = 'http://localhost:8080/categorias'
        fetch(Url)
            .then(async (respostaServer) =>{
                const resposta = await respostaServer.json();
                setCategorias([
                    ...resposta,
                ]);
            });    
        
    }, []);

    return (
        <PageDefault>
            <DivContainer>
                <h1>
                    Cdastro de Categoria:
                    {values.nome}
                </h1>

                <form onSubmit={function handleSubmit(infosEventos) {
                    infosEventos.preventDefault();
                    setCategorias([
                        ...categorias,
                        values,
                    ]);
                    setValues(initialValues);
                }}>
                    <FormField
                        label="Nome da Categoria: "
                        type="text"
                        name="nome"
                        value={values.nome}
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
                        Carregando...
                    </div>
                )}
                <ul>
                    {categorias.map((categoria) => (
                        <li key={categoria}>
                            {categoria.nome}
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
