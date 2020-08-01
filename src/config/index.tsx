const URL = window.location.hostname.includes('localhost')
    ? "http://localhost:8080/categorias"
    : "site de producao"

export default URL;