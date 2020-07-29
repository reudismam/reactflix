import React from 'react'
import PageDefault from '../../PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
    return (
      <PageDefault>
        <h1>Página de Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
          Cadastar Categoria
        </Link>
      </PageDefault>
    );
  }

export default CadastroVideo;