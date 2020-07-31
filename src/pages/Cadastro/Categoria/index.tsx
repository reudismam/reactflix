import React, {useState} from 'react'
import PageDefault from '../../PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'

interface Categoria {
  nome: string,
  descricao: string,
  cor: string
}

export default function CadastroCategoria() {
  const valoresIniciais = {
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
        

        <button>
          Cadastrar
        </button>
      </form>

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