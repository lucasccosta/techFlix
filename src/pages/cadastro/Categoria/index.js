import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  // Estado que guarda as categorias
  const [categorias, setCategorias] = useState([]);
  // Estado para guardar o TEXTO das categorias


  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          // setCategorias([]) esses colchetes são postos pois temos que manter a estrutura do useState - manter o mesmo dado que foi passado inicialmente
          setCategorias([
            ...categorias, // usamos o SPREAD pois temos que garantir que não só entrem mais dados, mas que os dados que já foram digitados anteriormente apareçam também (garantir o que tem, adicionar sem sobrescrever)
            values, // é o novo item
          ]);

          clearForm();
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          {/* FORMFIELD SUBSTITUI ESSES CAMPOS DO FORMULÁRIO */}
          {/* <div>
                    <label>
                        Nome da Categoria
                        <input
                        type='text'
                        name='nome'
                        value={values.nome}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria}${index}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>

      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
