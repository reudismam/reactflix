import React, {useState, useEffect} from 'react'
import PageDefault from '../../PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import ButtonLink from '../../../components/ButtonLink';

interface Categoria {
  id: number,
  nome: string,
  descricao: string,
  cor: string
}

export default function CadastroCategoria() {
  const valoresIniciais = {
    id: 0,
    nome: '',
    descricao: '',
    cor: ''
  }
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    
    const [categoria, setCategoria] = useState<Categoria>(valoresIniciais);

    function setValue(e: React.ChangeEvent<HTMLInputElement>){
      const {name, value} = e.target;  
      setCategoria({
          ...categoria,
        [name]: value
        });
    }

    function setValueTextArea(e: React.ChangeEvent<HTMLTextAreaElement>){
      setCategoria({
        ...categoria,
      [e.target.name]:e.target.value
      });
  }

    useEffect(() => {
      console.log('USE EFFECT');

      const URL = "http://localhost:8080/categorias"
      fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        console.log(resposta);
        setCategorias([
          ...resposta
        ]);
      });

      /*setTimeout(() => {
        setCategorias([
          {
            "id": 1,
            "nome": "Front-End",
            "descricao": "Aventura",
            "cor": "#cbcbff"
            },
            {
            "id": 1,
            "nome": "Front-End",
            "descricao": "Aventura",
            "cor": "#cbcbff"
            }
        ]
        );
      }, 4 * 1000);*/
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
          setCategoria(valoresIniciais)
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
        

        <ButtonLink
          className="ButtonLink"
          href="/"
        >
          Cadastrar
        </ButtonLink>
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