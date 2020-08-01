import {useState} from 'react'
import Categoria from './Categoria';
  
export default  function useForm(valoresIniciais: Categoria) {
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
  
    function clearForm() {
      setCategoria(valoresIniciais)
    }
  
    return {
      categoria,
      setValue,
      setValueTextArea,
      clearForm
    }
  }
  