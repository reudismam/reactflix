import React, {useState, useEffect} from 'react'
import PageDefault from '../../PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import ButtonLink from '../../../components/ButtonLink';
import useForm from '../../../forms/useform';
import Categoria from '../../../forms/Categoria';

export default function CadastroCategoria() {
  const valoresIniciais = {
    id: 0,
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const {categoria, setValue, setValueTextArea, clearForm} = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  
    useEffect(() => {
      console.log('USE EFFECT');

      const URL = window.location.hostname.includes('localhost')
      ? "http://localhost:8080/categorias"
      : "site de producao"
      fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        console.log(resposta);
        setCategorias([
          ...resposta
        ]);
      });
    },
    [categoria.nome]);
    //console.log(categoria.nome);
    return (
      <PageDefault>
        <h1>Página de Cadastro de Categoria: {categoria.nome}</h1>

        <form onSubmit={function handleSubmit(evento) {
          evento.preventDefault();
          console.log("Você tentou enviar o form?");
          setCategorias([
            ...categorias, categoria
          ]);
          clearForm()
        }}>
        
        <FormField
          label="Nome da Categoria:"
          value={categoria.nome} 
          onChange={setValue}
          name="nome"
          type="text"
        />

         <div>
          <label>
            Descrição:
            <textarea
              name="descricao"
              value= {categoria.descricao}
              onChange={setValueTextArea}
            />
          </label>
          </div>
          <div>
          <FormField 
            label="Cor:"
            type="color"
            name="cor"
            value= {categoria.cor}
            onChange={setValue}
          />
        </div>
        

        <button
          //className="ButtonLink"
          //href="/"
        >
          Cadastrar
        </button>
      </form>
      {categorias.length === 0 &&
      <div>
        {/* Carregando ... */}
        Loading ...
      </div>
      }

      <ul>
        {categorias.map((categoria, indice) => {
          return (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
          );
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
      </PageDefault>
    );
  }