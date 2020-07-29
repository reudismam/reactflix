import React from 'react'
import PageDefault from '../../PageDefault'
import { Link } from 'react-router-dom'

export default function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Página de Cadastro de Categorias</h1>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    );
  }