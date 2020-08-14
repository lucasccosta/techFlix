import { useState } from 'react';

function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais);

  // values recebe valoresIniciais, e será usado lá nos inputs
  // é importante lembrar que utilizamos values ao invés de valoresIniciais, já que values pode ser alterado por setValues (hook), já o valoresIniciais não

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // chave: nome ou descricao, ou qualquer coisa
    });
  }

  // Lembre-se: chave = event.target.getAttribute('name')
  //    valor = event.target.value

  // setValue(
  //     event.target.getAttribute('name'),
  //     event.target.value
  // )
  //    os event.target são substituídos pelo destructing
  function handleChange(event) {
    // DESTRUCTURING NÃO TÁ FUNCIONANDO //
    // const { value, getAttribute } = event.target;
    // setValue(
    //     getAttribute('name'),
    //     value
    // );
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais)
  }

  return {
    values,
    handleChange,
    clearForm,
  }
}

export default useForm;