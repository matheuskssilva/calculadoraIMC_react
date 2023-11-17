import { useState } from 'react';
import styles from '../Formulario/Formulario.module.css';

const Formulario = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('')

  const calculeImc = (event) => {
    event.preventDefault()

    if (height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos')
      return;
    }

    const imc = weight / (height * height)
    const imcFormated = imc.toFixed(2)

    setResult(+imcFormated)
    console.log(result)
  }

  const getClassificacaoIMC = () => {
    if (!result) {
      return '';
    }

    if (result < 18.5) {
      return 'Abaixo do peso';
    } else if (result >= 18.5 && result < 24.9) {
      return 'Peso normal';
    } else if (result >= 25 && result < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

  return (
    <div className={styles.form_container}>
      <h1>Calcule seu IMC</h1>
      <form className={styles.form}>
        <label htmlFor="height">Digite a sua altura:</label>
        <input type="number"
        id='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        
        <label htmlFor='weight' >Digite seu Peso</label>
        <input type="number"
        id='weight'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        
        />

        <button type="submit"
        className={styles.button}
        onClick={calculeImc}
        value={result}>
        Calcular
        </button>
      </form>
      {result && (
        <div className={styles.resultado}>
          
          <h2>Resultado:</h2>
          <p>Seu IMC é: {result}</p>
          <p>Classificação: {getClassificacaoIMC()}</p>
          
        </div>
      )}
    </div>
  )
  
}

export default Formulario
