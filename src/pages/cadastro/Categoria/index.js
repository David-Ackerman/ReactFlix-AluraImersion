import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import DivContainer from '../div.js';
import FormField from '../../../components/FormField'


function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);
    
    const initialValues ={
        nome: '',
        descricao: '',
        cor: '',
    }

    const [values, setValues] = useState(initialValues);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }
    function funcaoSet(infoValue){
                                
        setValue(infoValue.target.getAttribute('name'), infoValue.target.value);
    }

    return (
        <PageDefault>
            <DivContainer>
            <h1>Cdastro de Categoria: {values.nome}</h1>

                <form onSubmit={function handleSubmit(infosEventos){
                    infosEventos.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ])
                    setValues(initialValues)
                }}>
                    <FormField label="Nome da Categoria: "
                        name="nome"
                        type="text"
                        value={values.nome}
                        onChange={funcaoSet}
                    />
                    <div>
                        <label>
                            Descrição:
                            <textarea type="text" name="descricao" value={values.descricao} onChange={funcaoSet}/>
                        </label>
                    </div>
                    <FormField label="Cor: " name="cor" type="color" value={values.cor} onChange={funcaoSet}/>
                    <button>
                        Cadastrar
                    </button>
                </form>
                <ul>
                    {categorias.map((categoria) => {
                        return (
                            <li key={categoria}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
                <Link to="/">
                    ir para home
                </Link>
            </DivContainer>
        </PageDefault>
    );
}

export default CadastroCategoria;