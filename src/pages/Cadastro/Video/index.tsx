import React, {useEffect, useState} from 'react'
import PageDefault from '../../PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField';
import useForm from '../../../forms/useform';
import repository from '../../../repositories/categorias'
import Category from '../../../objects/Category';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    repository.getAllCategoriesWithVideos()
    .then((allCategoriesWithVideos) => {
      const categorias = allCategoriesWithVideos.map((categoria: Categoria) => {
        return categoria;
      });
      setCategorias(categorias);
    })
    .catch((err) => {
      console.log(err.message);
    });
  },
  []);


  const valoresIniciais = {
    id: 0,
    nome: '',
    descricao: '',
    cor: '',
    url: '',
    categoria: '',
    suggestions: ['Front-end', 'Back-end']
  }
  
  const {categoria, setValue, setValueTextArea, clearForm} = useForm(valoresIniciais);

    return (
      <PageDefault>
        <h1>Página de Cadastro de Vídeo</h1>
        <form onSubmit={(event) => {
          event.preventDefault();

          const categoriaId = categorias.find((categoria) => {
            return categoria.titulo === categoria.titulo
          });

          repository.getVideos({
              titulo: categoria.nome,
              url: categoria.url,
              categoriaId: categoria.id
          })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });

          history.push("/");
        }}
        >
          <FormField
            label="Título do Vídeo:"
            value={categoria.nome} 
            onChange={setValue}
            name="titulo"
            type="text"
            suggestions={categoria.suggestions}
          />

          <FormField
            label="URL do Vídeo:"
            value={categoria.url} 
            onChange={setValue}
            name="url"
            type="text"
            suggestions={categoria.suggestions}
          />

        <FormField
            label="Categoria:"
            value={categoria.categoria} 
            onChange={setValue}
            name="categoria"
            type="text"
            suggestions={categoria.suggestions}
          />

        <button>
          Cadastrar
        </button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastar Categoria
        </Link>
      </PageDefault>
    );
  }

export default CadastroVideo;